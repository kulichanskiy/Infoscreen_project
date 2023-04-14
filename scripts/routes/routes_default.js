const { conn } = require("../modules/mysqlconnect.js");

function getRouteStationList(x, callback) {
   conn.query(
      "SELECT routeStationsID FROM routes WHERE routeID ='" + x + "'",
      function (error, results) {
         if (error) {
            callback("Error: Wrong route ID or bad gateway with Database");
         } else {
            const routeStationsID = results[0].routeStationsID.split(", ").map(Number);
            callback(null, routeStationsID);
         }
      }
   );
}
function getRouteLogo(x, callback) {
   conn.query("SELECT routeLogo FROM routes WHERE routeID ='" + x + "'", function (error, results) {
      if (error) {
         callback("Error: Wrong route ID or bad gateway with Database", null);
      } else {
         const routeLogo = results[0].routeLogo;
         callback(null, routeLogo);
      }
   });
}
function getRouteDestination(x, callback) {
   conn.query(
      "SELECT routeDestinationID FROM routes WHERE routeID ='" + x + "'",
      function (error, results) {
         if (error) {
            callback("Error: Wrong route ID or bad gateway with Database");
         } else {
            const routeDestinationID = results[0].routeDestinationID;
            // console.log(routeDestinationID);
            callback(null, routeDestinationID);
         }
      }
   );
}
function getRouteColor(x, callback) {
   conn.query(
      "SELECT routeColor FROM routes WHERE routeID ='" + x + "'",
      function (error, results) {
         if (error) {
            callback("Error: Wrong route ID or bad gateway with Database");
         } else {
            const routeColor = results[0].routeColor;
            // console.log(routeColor);
            callback(null, routeColor);
         }
      }
   );
}
function getRouteInfo(x) {
   getRouteLogo(x, function (error, result) {
      if (error) {
         console.log("Error: Wrong ID or bad gateway");
      } else {
         console.log("Route number(logo): " + result);
      }
   });
   getRouteStationList(x, function (error, result) {
      if (error) {
         console.log("Error: Wrong ID or bad gateway");
      } else {
         console.log("Route stations' IDs: " + result);
      }
   });
   getRouteDestination(x, function (error, result) {
      if (error) {
         console.log("Error: Wrong ID or bad gateway");
      } else {
         console.log("Route destination station's ID: " + result);
      }
   });
   getRouteColor(x, function (error, result) {
      if (error) {
         console.log("Error: Wrong ID or bad gateway");
      } else {
         console.log("Route color: " + result);
      }
   });
}

getRouteInfo(1);
