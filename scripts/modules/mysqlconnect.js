const mysql = require("mysql2");

const connection = mysql.createConnection({
   host: "localhost",
   user: "mysql",
   database: "stationlist",
   password: "mysql",
});
// connection.connect((err) => {
//    if (err) throw err;
//    console.log("\nDatabase --- OK \n");
// });

let queryStationlist = "SELECT * FROM `station`";
let queryRoutelist = "SELECT * FROM `routes`";

module.exports = {
   conn: connection,
   queryStationlist: queryStationlist,
   queryRoutelist: queryRoutelist,
};
