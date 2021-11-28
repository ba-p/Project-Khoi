import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "food",
});

export const connect = () => {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!");
  });
};