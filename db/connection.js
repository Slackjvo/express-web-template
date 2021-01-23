const mysql = require("mysql2/promise");

// Credentials
module.exports = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda"
});