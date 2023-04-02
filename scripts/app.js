import mysql2Connect from "./modules/mysqlconnect.js";

mysql2Connect();

const nextStation = document.getElementById("next-station-name");
const stationList = document.getElementById("stations");
const routeNumber = document.getElementById("route-number");

// Set the route number
routeNumber.innerText = "Route Number: XYZ";

// Display the list of stations
stations.forEach((station) => {
   const li = document.createElement("li");
   li.innerText = `${station.name} (${station.arrivalTime})`;
   stationList.appendChild(li);
});

// Remove the first station from the list when the train arrives
setTimeout(() => {
   stationList.removeChild(stationList.firstChild);
   nextStation.innerText = stations[1].name;
}, 5000);

// Update the current time every second
setInterval(() => {
   const currentTime = new Date();
   const hours = currentTime.getHours().toString().padStart(2, "0");
   const minutes = currentTime.getMinutes().toString().padStart(2, "0");
   const seconds = currentTime.getSeconds().toString().padStart(2, "0");
   document.getElementById("current-time").innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);
