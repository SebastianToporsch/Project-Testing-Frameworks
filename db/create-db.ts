import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config({ path: "config/.env" });

var connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  multipleStatements: true
});

// log if an error occurs
connection.on('error', function () {
  connection.destroy();
  console.log('An ERROR occured!');
});

connection.connect(function (err: any) {
  if (err) throw err;
  // tslint:disable-next-line: no-shadowed-variable
  connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME};`, (err: any) => {
    if (err) throw err;
    console.log("Database created");
    connection.destroy();
    createTable();
  });
});

function createTable() {

  // sql for creating tables
  const sql_user = `
  CREATE TABLE IF NOT EXISTS users (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    age int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT UNIQ_username UNIQUE (username)
  );`;

  // create connection to the database
  connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    multipleStatements: true
  });

  // log exception
  connection.on('error', function () {
    connection.destroy();
    console.log('An ERROR occured!');
  });

  // connect to the database
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // execute the sql string
    // tslint:disable-next-line: no-shadowed-variable
    connection.query(sql_user, function (err: any, result: any) {
      if (err) throw err;
      console.log("Tables created");
      connection.destroy();
    });
  });
}







