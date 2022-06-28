import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config({ path: "config/.env" });
import { User } from '../models/userModel.js';

export const connectionPool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    multipleStatements: true
});

/**
 * Get a connection out of the pool
 * @returns Promise that resolves to connection
 */
function getConnection() {
    return new Promise(function (resolve, reject) {
        connectionPool
            .getConnection(function (err, connection) {
                if (err) reject(err);
                resolve(connection);
            });
    });
};

/**
 * Get a User in the database
 * @param user User
 * @returns Promise that resolves to User
 */
function getUser(id) {
    return new Promise(function (resolve, reject) {
        if (id != 'undefined' && id != null && id != '') {
            resolve()
        } 
        const sqlString = `
            SELECT id, username, age, email
            FROM users
            WHERE id=${id}
            LIMIT 1;
        `;
        getConnection().then(function (connection) {
            connection.query(sqlString, function (err, result, fields) {
                connection.release();
                if (err) {
                    reject(err)
                } else {
                    var itemList = [];
                    result.forEach(element => {
                        itemList.push(new User(element.id, element.username, element.age, element.email))
                    });
                    resolve(itemList);
                }
            });
        }).catch(function (error) {
            console.log("test");
            reject(error);
        });
    });
};


/**
 * Get all Users in the database
 * @returns Promise that resolves to User[]
 */
function getUsers() {
    return new Promise(function (resolve, reject) {

        const sqlString = `
            SELECT *
            FROM users;
        `;
        getConnection().then(function (connection) {
            connection.query(sqlString, function (err, result) {
                connection.release();
                if (err) {
                    reject(err)
                } else {
                    var itemList = [];
                    result.forEach(element => {
                        itemList.push(new User(element.id, element.username, element.age, element.email))
                    });
                    resolve(itemList);
                }
            });
        }).catch(function (error) {
            reject(error);
        });
    });
};

/**
 * Add a user to the database
 * @param user User 
 * @returns Promise that resolves to id
 */
function addUser(user) {
    return new Promise(function (resolve, reject) {
        var sqlString = `
            INSERT INTO users
            (username,age,email,password)
            VALUES (?,?,?,?);
        `;
        getConnection().then(function (connection) {
            connection.query(sqlString, [user.username, user.age,user.email, user.password], function (err, result) {
                connection.release();
                if (err) {
                    reject(err)
                } else {
                    resolve(result.insertId);
                }
            });
        }).catch(function (error) {
            reject(error);
        });
    });
};

/**
 * Update a user in the database
 * @param user User 
 * @returns Promise that resolves to result
 */
function changeUser(id,user) {
    return new Promise(function (resolve, reject) {
        var sqlString = `
            UPDATE users
            SET username=?,age=?,email=?,password=?
            WHERE id=?;
        `;
        getConnection().then(function (connection) {
            connection.query(sqlString,[user.username, user.age, user.email, user.password,id], function (err, result, fields) {
                connection.release();
                if (err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        }).catch(function (error) {
            reject(error);
        });
    });
};

/**
 * Deletes a user from the database.
 * @param id id of the user
 * @returns Promise that resolves to result
 */
function deleteUser(id) {
    return new Promise(function (resolve, reject) {
        var sqlString = `
            DELETE FROM users
            WHERE id=?;
        `;
        getConnection().then(function (connection) {
            connection.query(sqlString, [id], function (err, result) {
                connection.release();
                if (err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        }).catch(function (error) {
            reject(error);
        });
    });
};

/**
 * Deletes a user from the database.
 * @param username username of the user
 * @returns Promise that resolves to result
 */

function deleteUserByUsername(username) {
    return new Promise(function (resolve, reject) {
        var sqlString = `
            DELETE FROM users
            WHERE username=?;
        `;
        getConnection().then(function (connection) {
            connection.query(sqlString, [username], function (err, result, fields) {
                connection.release();
                if (err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        }).catch(function (error) {
            reject(error);
        });
    });
};

const DBConnection = {
    getConnection: getConnection,
    getUser: getUser,
    getUsers: getUsers,
    addUser: addUser,
    changeUser: changeUser,
    deleteUser: deleteUser,
    deleteUserByUsername: deleteUserByUsername,
}

export { DBConnection };