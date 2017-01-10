

'use strict';

// const EventEmitter = require('promise-events');
const path = require('path');
const fs = require('fs');
const readline = require('readline');

// const problem1 = require('../../src/problem1/problem1').problem1;

module.exports.fileReader = function(cb, fileSource) {
  	let dataSet = [];
  	let source = path.resolve(__dirname, fileSource);

	const lineReader = require('readline').createInterface({
	  // input: require('fs').createReadStream('/Users/fesebuv/Documents/conde_nast/github/amc_problems/src/problem1/problem1.in')
	  input: require('fs').createReadStream(source)
	});

	lineReader.on('line', function (line) {
	  dataSet.push(line.split(' '));
	});


	lineReader.on('close', function() {
		let rawData = dataSet.slice(1);
		let data = rawData.map(function(value){
	    	return value[1];
	  	});
		cb(data);
	});
};
