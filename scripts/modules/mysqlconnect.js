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
      // console.log("Database OK");
   }
});

const query = {
   allStation: "SELECT * FROM `station`",
   stationID: "SELECT id FROM `station`",
   stationNameUA: function (x) {
      // Where x is ID
      let name_ua = "SELECT name_ua FROM `station` WHERE id=" + x + "'";
      return name_ua;
   },
   stationNameEN: function (x) {
      // Where x is ID
      let name_en = "SELECT name_en FROM `station` WHERE id=" + x + "'";
      return name_en;
   },
   stationConnMetro: function (x) {
      // Where x is ID
      let connMetro = "SELECT metro FROM `station` WHERE id=" + x + "'";
      return connMetro;
   },
};

module.exports = {
   conn: connection,
   query: query,
};
