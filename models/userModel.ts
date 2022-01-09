import { User } from "../types/userType";
import { database } from '../rest_server';
import { RowDataPacket } from "mysql2";

export const create = (user: User, callback: Function) => {
  const queryString = `INSERT INTO users (id, username, age) VALUES (?, ?, ?)`;

  database.query(
    queryString,
    [user.id, user.username, user.age],
    (err, result) => {

      if (err) {
        callback(err);
      }

      callback(null, user);

    }
  );
};

export const readAll = (callback: Function) => {

  const queryString = "SELECT * from users ";

  database.query(
    queryString, (err, result) => {

      if (err) {
        callback(err);
      }

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

};

export const readOne = (userId: number, callback: Function) => {

  const queryString = `SELECT * from users WHERE id=?`;

  database.query(
    queryString, userId, (err, result) => {

      if (err) {
        callback(err);
      }

      const row = (<RowDataPacket>result)[0];
      const user: User = {
        id: row.id,
        username: row.username,
        age: row.age
      };
      callback(null, user);
    });
};

export const update = (user: User, userId, callback: Function) => {
  const queryString = `UPDATE users SET username=?, age=? WHERE id=?`;

  database.query(
    queryString,
    [user.username, user.age, userId],
    (err, result) => {

      if (err) {
        callback(err);
      }
      callback("Name and Age update successful");
    });
};

export const del = (userId, callback: Function) => {
  const queryString = `DELETE FROM users WHERE id=?`;

  database.query(
    queryString,
    [userId],
    (err, result) => {

      if (err) {
        callback(err);
      }
      callback("User successfully deleted");
    });
};