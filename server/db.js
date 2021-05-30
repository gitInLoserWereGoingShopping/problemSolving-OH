var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "groceries"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = con;
