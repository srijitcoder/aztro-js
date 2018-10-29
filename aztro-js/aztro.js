/**  coding: utf-8 

``````````
aztro-js

``````````

aztro-js is a NPM package for Aztro - The Astrology API


:copyright: (c) 2018 by Srijit S Madhavan.
:license: Apache 2.0, see LICENSE for more details.

**/


const request = require('request')

let aztro = module.exports = {}

aztro.error = [
	{
		error: "Please use a correct propertyion. Refer documentation."
	}
]

aztro.getHoroscope = function(sign, day, callback, property = 0) {
	let propertyions = {
		url: `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`,
		method: 'POST',
		json: 'true'
	}

	request(propertyions, function (error, response, body) {
		try {
			if (!error && response.statusCode == 200) {
				if(property !== 0) {
					let res = body[property]
					if(res === undefined)
						throw aztro.error[0]
					else
						return callback(res)
				}
				else
		    		return callback(body)
			}	
			else 
				throw aztro.error[0]
		}
		catch(e) {
			return callback(e)
		}
	})
}

aztro.getTodaysHoroscope = function(sign, callback, property) {
	aztro.getHoroscope(sign, 'today', function(res) {
		return callback(res)
	}, property)
}

aztro.getTomorrowsHoroscope = function(sign, callback, property) {
	aztro.getHoroscope(sign, 'tomorrow', function(res) {
		return callback(res)
	}, property)
}

aztro.getYesterdaysHoroscope = function(sign, callback, property) {
	aztro.getHoroscope(sign, 'yesterday', function(res) {
		return callback(res)
	}, property)
}

aztro.getAllHoroscope = function(sign, callback) {
	let all = {
		yesterday: new Object,
		today: new Object,
		tomorrow: new Object
	}

	aztro.getTodaysHoroscope(sign, function(res) {
		all.today = res
		aztro.getYesterdaysHoroscope(sign, function(res) {
			all.yesterday = res
			aztro.getTomorrowsHoroscope(sign, function(res) {
				all.tomorrow = res
				return callback(all)
			}, property = 0)
		}, property = 0)
	}, property = 0)
}