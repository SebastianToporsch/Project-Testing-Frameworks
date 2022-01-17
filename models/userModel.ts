import { User } from "../types/userType";
import { database } from '../rest_server';
import { RowDataPacket } from "mysql2";
import { throws } from "assert";

export const create = (user: User, callback: Function) => {
  const queryString = `INSERT INTO users (id, username, age) VALUES (?, ?, ?)`;

  try {
    database.query(
      queryString,
      [user.id, user.username, user.age],
      (err, result) => {
        callback(null, user);
      }
    );

  } catch (error) {
    callback(error);
  }
};

export const readAll = (callback: Function) => {
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
            age: row.age
          };
          users.push(user);
        });

        callback(null, users);
      });

  } catch (error) {
    callback(error);
  }
};

export const readOne = (userId: number, callback: Function) => {
  const queryString = `SELECT * from users WHERE id=?`;

  database.query(
    queryString, userId, (err, result) => {

      try {
        const row = (<RowDataPacket>result)[0];
        const user: User = {
          id: row.id,
          username: row.username,
          age: row.age
        };

        callback(null, user);

      } catch (error) {
        callback(error);
      }
    });
};

export const update = (user: User, userId, callback: Function) => {
  const queryString = `UPDATE users SET username=?, age=? WHERE id=?`;

  try {
    database.query(
      queryString,
      [user.username, user.age, userId],
      (err, result) => {

        callback("Name and Age update successful");
      });

  } catch (error) {
    callback(error);
  }
};

export const del = (userId, callback: Function) => {
  const queryString = `DELETE FROM users WHERE id=?`;
try {
  database.query(
    queryString,
    [userId],
    (err, result) => {

      if (err) {
        callback(err);
      }
      callback("User successfully deleted");
    });

  } catch (error) {
    callback(error);
  }
};