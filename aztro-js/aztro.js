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

aztro.getHoroscope = function(sign, day, property = 0) {
	let propertyions = {
		url: `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`,
		method: 'POST',
		json: 'true'
	}
	let callback = typeof (property) === 'function' ? property : null
	if (callback) {
		property = arguments.length > 3 ? arguments[3] : 0
	}

	const prom = new Promise( (resolve,reject) => {
        request(propertyions, function (error, response, body) {
            try {
                if (!error && response.statusCode == 200) {
                    if(property !== 0) {
                        let res = body[property]
                        if(res === undefined)
                            reject(aztro.error[0])
                        else
                            return resolve(res)
                    }
                    else
                        return resolve(body)
                }	
                else 
                    reject(aztro.error[0])
            }
            catch(e) {
                return reject(e)
            }
        })
	})
	
	if(typeof (callback) === 'function') {
		return prom.then(resp => {
			callback(null, resp)
		}).catch(err => {
			callback(err)
		})
	}

	return prom;
}

aztro.getTodaysHoroscope = function(sign, property=0) {
	Array.prototype.splice.apply(arguments, [1, 0, 'today'])
	return aztro.getHoroscope(...arguments)
}

aztro.getTomorrowsHoroscope = function(sign, property=0) {
	Array.prototype.splice.apply(arguments, [1, 0, 'tomorrow'])
	return aztro.getHoroscope(...arguments)
}

aztro.getYesterdaysHoroscope = function(sign, property) {
	Array.prototype.splice.apply(arguments, [1, 0, 'yesterday'])
	return aztro.getHoroscope(...arguments)
}

aztro.getAllHoroscope = function(sign, callback) {
	let all = {
		yesterday: new Object,
		today: new Object,
		tomorrow: new Object
	}

	return aztro.getTodaysHoroscope(sign).then(res => {
		all.today = res
		return aztro.getYesterdaysHoroscope(sign);
	}).then(res => {
        all.yesterday = res
        return aztro.getTomorrowsHoroscope(sign)
    }).then(res => {
		all.tomorrow = res
		
		if (typeof (callback) === 'function') {
			callback(null, all)
		}

        return all;
    })
}