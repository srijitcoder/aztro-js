const aztroJs = require("aztro-js")

let sign = 'aries'
let property = 'color'

//Get all horoscope i.e. today's, yesterday's and tomorrow's horoscope
aztroJs.getAllHoroscope(sign, function(res) {
	console.log(res)
})

//Get today's horoscope
aztroJs.getTodaysHoroscope(sign, function(res) {
	console.log(res)
})

//Get tomorrow's horoscope
aztroJs.getTomorrowsHoroscope(sign, function(res) {
	console.log(res)
})

//Get yesterday's horoscope
aztroJs.getYesterdaysHoroscope(sign, function(res) {
	console.log(res)
})

//Get a perticular property horoscope
aztroJs.getYesterdaysHoroscope(sign, function(res) {
	console.log(res)
}, property)