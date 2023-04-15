const { conn } = require('../mysqlconnect.js')

const defaultError = "Error: Wrong ID or bad gateway"

function getStationNameUA(stationId, callback) {
	conn.query(
        `SELECT name_ua FROM station WHERE id='${stationId}'`, 
        callback
    )
}
function getStationNameEN(stationId, callback) {
	conn.query(
        `SELECT name_en FROM station WHERE id='${stationId}'`, 
        callback
    )
}
function getStationConnMetro(stationId, callback) {
    conn.query(
        `SELECT metro FROM station WHERE id='${stationId}'`,
        callback
    )
}
function getStationConnBus(stationId, callback) {
    conn.query(
        `SELECT bus FROM station WHERE id='${stationId}'`,
        callback
    )
}
function getStationConnTram(stationId, callback) {
    conn.query(
        `SELECT tram FROM station WHERE id='${stationId}'`,
        callback
    )
}

function getStationConnTrain(stationId, callback) {
    conn.query(
        `SELECT train FROM station WHERE id='${stationId}'`,
        callback
    )
}

function getStationInfo(stationId) {
    console.log(`ID: '${stationId}'`)
    getStationNameUA(stationId, (error, result) => {
        if (error) {
            console.log(defaultError)
        }
        else {
            const name_ua = result[0].name_ua
            console.log(`Name (ukrainian): '${name_ua}'`)
        }
    })
    getStationNameEN(stationId, (error, result) => {
        if (error) {
            console.log(defaultError)
        }
        else {
            const nameEN = result[0].name_en
            console.log(`Name (english): '${nameEN}'`)
        }
    })
    getStationConnMetro(stationId, (error, result) => {
        if (error) {
            console.log(defaultError)
        }
        else {
            const metro = result[0].metro
            if (metro === "") {
                console.log(`No other metro lines connection`)
            }
            else {
                console.log(`Other metro lines: '${metro}'`)
            }
            
        }
    })
    getStationConnBus(stationId, (error, result) => {
        if (error) {
            console.log(defaultError)
        }
        else {
            const bus = result[0].bus
            if (bus === "") {
                console.log(`No bus connection`)
            }
            else {
                console.log(`Buses: '${bus}'`)
            }
        }
    })
    getStationConnTram(stationId, (error, result) => {
        if (error) {
            console.log(defaultError)
        }
        else {
            const tram = result[0].tram
            if (tram === "") {
                console.log(`No tram connection`)
            }
            else {
                console.log(`Trams: '${tram}'`)
            }
        }
    })
    getStationConnTrain(stationId, (error, result) => {
        if (error) {
            console.log(defaultError)
        }
        else {
            const train = result[0].train
            if (train === "1") {
                console.log(`Connection to the railway station`)
            }
            else {
                console.log(`No railway connection`)
            }
        }
    })
}