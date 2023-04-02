const mysql = require("mysql2");

const connection = mysql.createConnection({
   host: "localhost",
   user: "mysql",
   database: "stationlist",
   password: "mysql",
});
connection.connect((err) => {
   if (err) {
      console.log(err);
      return err;
   } else {
      console.log("Database OK");
   }
});
connection.query("SELECT name_ua FROM station", function (err, results, fields) {
   if (err) throw err;
   console.log(results);
});
