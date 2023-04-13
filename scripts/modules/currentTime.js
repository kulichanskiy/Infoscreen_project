let timeZone = "Europe/Kyiv";
let now = new Date();
let month = now.getMonth() + 1;
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
if (month < 10) {
   month = "0" + month;
}
if (day < 10) {
   day = "0" + day;
}
if (hours < 10) {
   hours = "0" + hours;
}
if (minutes < 10) {
   minutes = "0" + minutes;
}
let currentTime = hours + ":" + minutes;
let currentDate = day + "." + month;
document.getElementById("current_time_id").innerHTML = currentTime;
document.getElementById("current_date_id").innerHTML = currentDate;
