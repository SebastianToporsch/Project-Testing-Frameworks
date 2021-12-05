import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config({path:"config/.env" });

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user:  process.env.DATABASE_USER,
  password:  process.env.DATABASE_PASSWORD,
  multipleStatements: true
});

// log if an error occurs
connection.on('error', function() {
  connection.destroy();
  console.log('An error occured while creating the database');
});

connection.connect(function(err: any) {
  if(err) throw err;
  connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME};`, (err:any)=> {
    if (err) throw err;
    console.log("Database created");
    connection.destroy();
  });
});
