'use strict';

// const fileReader = require('../helpers/fileReader').fileReader;
// const fileSrc = '../problem1/problem1.in';

function greaterThan8(num) {
  var arrNum = num.split('');
  return (arrNum.indexOf('9') > -1 || arrNum.indexOf('8') > -1)
}

function getNum(num, radix) {
  if(radix === 8 && greaterThan8(num)){
    return 0;
  }
  return parseInt(num, radix) || 0;
}

module.exports.problem1 = function(dataSet) {
  // dataSet.forEach(function(num, index){
    // console.log('%s %s %s', index + 1, getNum(num,8), getNum(num,10), getNum(num,16));
  // });
  // return dataSet.map(function(){
  //   return `${index + 1}`;
  // });


  return dataSet.map(function(num, index) {
    return `${index + 1} ${getNum(num,8)} ${getNum(num,10)} ${getNum(num,16)}`;
  });
};
