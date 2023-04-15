const { conn } = require('../mysqlconnect.js')

function getRouteStationList(routeId, callback) {
	conn.query(
		`SELECT routeStationsID FROM routes WHERE routeID ='${routeId}'`,
		callback
	)
}
function getRouteLogo(routeId, callback) {
	conn.query(
		`SELECT routeLogo FROM routes WHERE routeID ='${routeId}'`,
		callback
	)
}

function getRouteDestination(routeId, callback) {
	conn.query(
		`SELECT routeDestinationID FROM routes WHERE routeID ='${routeId}'`,
		callback
	)
}

function getRouteColor(routeId, callback) {
	conn.query(
		`SELECT routeColor FROM routes WHERE routeID ='${routeId}'`,
		callback
	)
}

function getRouteInfo(routeId) {
	getRouteLogo(routeId, (error, result) => {
		if (error) {
			console.log('Error: Wrong ID or bad gateway')
		} else {
			const routeLogo = result[0].routeLogo
			console.log('Route number(logo): ', routeLogo)
		}
	})
	getRouteStationList(routeId, (error, result) => {
		if (error) {
			console.log('Error: Wrong ID or bad gateway')
		} else {
			const routeStationIds = result[0].routeStationsID.split(', ').map(Number)
			console.log("Route stations' IDs: ", routeStationIds)
		}
	})
	getRouteDestination(routeId, (error, result) => {
		if (error) {
			console.log('Error: Wrong ID or bad gateway')
		} else {
			const routeDestinationId = result[0].routeDestinationID
			console.log("Route destination station's ID: ", routeDestinationId)
		}
	})
	getRouteColor(routeId, (error, result) => {
		if (error) {
			console.log('Error: Wrong ID or bad gateway')
		} else {
			const routeColor = result[0].routeColor
			console.log('Route color: ', routeColor)
		}
	})
}

getRouteInfo(1)
