import { User, UserwithPassword } from '../types/userType';
import { database } from '../rest_server';
import { RowDataPacket } from "mysql2";
import { validateEmail } from '../util/database-functions';
import { userInfo } from 'os';
/**
 *
 *
 * @export
 * @param {UserwithPassword} user
 * @param {Function} callback
 * @return {*} 
 */
export function create(user: UserwithPassword, callback: Function) {
  const queryString = `INSERT INTO users (id, username, age, email, password) VALUES (?, ?, ?, ?, ?)`;

  if (user.username == "" || user.age <= 0) {
    callback(null, user);
    return;
  }

  try {
    database.query(
      queryString,
      [user.id, user.username, user.age, user.email, user.password],
      (err, result) => {
        callback(null, user);
      }
    );

  } catch (error) {
    callback(error);
  }
}

/**
 *
 *
 * @export
 * @param {Function} callback
 */
export function readAll(callback: Function) {
  const queryString = "SELECT * from users ";

  try {
    database.query(
      queryString, (err, result) => {

        const rows = (<RowDataPacket>result);
        const users: User[] = [];

        rows.forEach(row => {

          const user: User = {
            id: row.id,
            username: row.username,
            age: row.age,
            email: row.email
          };
          users.push(user);
        });

        callback(null, users);
      });

  } catch (error) {
    callback(error);
  }
}
/**
 *
 *
 * @export
 * @param {String} userName
 * @param {Function} callback
 */
export function readOne(userName: String, callback: Function) {
  const queryString = `SELECT * from users WHERE username=?`;

  database.query(
    queryString, userName, (err, result) => {

      try {
        const row = (<RowDataPacket>result)[0];
        const user: User = {
          id: row.id,
          username: row.username,
          age: row.age,
          email: row.email
        };

        callback(null, user);

      } catch (error) {
        callback(error);
      }
    });
}
/**
 *
 *
 * @export
 * @param {User} newUser
 * @param {String} oldUser
 * @param {Function} callback
 * @return {*} 
 */
export function updateInformation(newUser: User, oldUser: String, callback: Function) {
  const queryString = `UPDATE users SET username=?,age=? WHERE username=?`;

  if (!validateEmail(newUser.email)) {
    callback("Invalid username or age");
    return;
  }

  try {
    database.query(
      queryString,
      [newUser.username, newUser.age, oldUser],
      (err, result) => {
        if (err) {
          callback(err);
        }

        callback("Name and Age update successful");
      });

  } catch (error) {
    callback(error);
  }
}

export async function updateEmail(newEmail: String, oldUser: String, callback: Function) {
  const queryString = `UPDATE users SET email=? WHERE username=?`;

  if (await validateEmail(newEmail) == false) {
    callback("Invalid email.");
    return;
  }

  try {
    database.query(
      queryString,
      [newEmail, oldUser],
      (err, result) => {
        if (err) {
          callback(err);
        }

        callback("Email update successful");
      });

  } catch (error) {
    callback(error);
  }
}

export function updatePassword(newPassword: String, oldUser: String, callback: Function) {
  const queryString = `UPDATE users SET password=? WHERE username=?`;

  if (newPassword.length <= 0) {
    callback("Invalid password.");
    return;
  }

  try {
    database.query(
      queryString,
      [newPassword, oldUser],
      (err, result) => {
        if (err) {
          callback(err);
        }

        callback("Password update successful");
      });

  } catch (error) {
    callback(error);
  }
}


/**
 *
 *
 * @export
 * @param {String} userName
 * @param {Function} callback
 */
export function del(userName: String, callback: Function) {
  const queryString = `DELETE FROM users WHERE username=?`;
  try {
    database.query(
      queryString,
      [userName],
      (err, result) => {

        if (err) {
          callback("ERROR");
        }
        callback("User successfully deleted");
      });

  } catch (error) {
    callback("ERROR");
  }
}
