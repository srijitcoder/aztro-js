#################################
aztro-js
#################################

aztro-js is a npm package for `aztro <https://github.com/sameerkumar18/aztro>`_ written in NodeJS.

aztro provides horoscope info for sun signs such as Lucky Number, Lucky Color, Mood, Color, Compatibility with other sun signs, description of a sign for that day etc.

Documentation for aztro API is available `here <https://aztro.readthedocs.io/en/latest/>`_, documentation for aztro-js is under development.

Requirements
---------------

* Node 6.14.4+ (Recommended)
* The ``request@2.88.0+`` library. `npm` should handle this for you when installing aztro-js.
* This package requires a stable internet connection to call the `aztro <https://aztro.readthedocs.io/en/latest/>`_ API

Installation
---------------
::

    npm install aztro-js --save

Example Usage
------------------
::

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

Support
----------
If you encounter any bugs, please let me know by `creating an issue <https://github.com/srijitcoder/aztro-js/issues/new>`_ or email me `Srijit S Madhavan <mailto:sayhi@srijitcoder.me>`_.

Contributing
---------------
Please see the repository's `CONTRIBUTING` file.

Say Thanks
---------------
`Say Thanks <https://saythanks.io/to/srijitcoder>`_

Donate
---------------
`Paypal <https://www.paypal.me/srijitcoder>`_

Credits
=======

`aztroJS <https://www.npmjs.com/package/aztro-js>`_ was created by `Srijit S Madhavan <https://srijitcoder.me>`_.

    *  `Aztro API <https://aztro.sameerkumar.website>`_ and `Pyaztro <https://pypi.org/project/pyaztro>`_ was created by `Sameer Kumar <http://www.sameerkumar.website>`_.

    *  Thanks `Sameer Kumar <http://www.sameerkumar.website>`_ for Documentation reference.

    *  Source of horoscope updates - https://aztro.sameerkumar.website

and if I have neglected to mention someone, please let me know.

Please feel free to use and adapt this aztro-js NPM Package.



.. image:: https://readthedocs.org/projects/aztro/badge/?version=latest
    :target: http://aztro.readthedocs.io/en/latest/?badge=latest


.. image:: https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg
    :target: https://saythanks.io/to/srijitcoder
