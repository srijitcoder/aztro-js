const aztro = require('../aztro-js/aztro.js')

let sign = 'aries'
let property = 'color'

//Get all horoscope i.e. today's, yesterday's and tomorrow's horoscope
aztro.getAllHoroscope(sign, function(res) {
	console.log(res)
})

//Get today's horoscope
aztro.getTodaysHoroscope(sign, function(res) {
	console.log(res)
})

//Get tomorrow's horoscope
aztro.getTomorrowsHoroscope(sign, function(res) {
	console.log(res)
})

//Get yesterday's horoscope
aztro.getYesterdaysHoroscope(sign, function(res) {
	console.log(res)
})

//Get a perticular property horoscope
aztro.getYesterdaysHoroscope(sign, function(res) {
	console.log(res)
}, property)