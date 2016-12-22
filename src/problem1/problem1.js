'use strict';

const iterations = 4;

function getNum(num, radix) {
  var val = parseInt(num, radix);
  if(isNaN(val)){
    return 0
  }
  return val;
}

module.exports.problem1 = function(iterations) {
  var sampleData = [
    '1234',
    '9',
    '1777',
    '129'
  ];

  for(var i=0; i<iterations; i++) {
    var num = sampleData[i];
    console.log('%s %s %s', i + 1, getNum(num,8), getNum(num,10), getNum(num,16));
  }

};

module.exports.problem1(iterations);
