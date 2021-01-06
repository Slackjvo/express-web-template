const mysql = require("mysql");

// Credentials
module.exports = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda"
});