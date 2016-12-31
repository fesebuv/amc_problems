'use strict';

const fileReader = require('../helpers/fileReader').fileReader;
const fileSrc = '../problem1/problem1.in';

function getNum(num, radix) {
  if(radix === 8){
    var arrNum = num.split('');
    if(arrNum.indexOf('9') > -1) {
      return 0
    }
  }
  return parseInt(num, radix) || 0;
}

module.exports.problem1 = function(dataSet) {
  dataSet.forEach(function(num, index){
    console.log('%s %s %s', index + 1, getNum(num,8), getNum(num,10), getNum(num,16));
  });
};
