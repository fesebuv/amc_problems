'use strict';


function getNum(num, radix) {
  if(radix === 8){
    var arrNum = num.split('');
    if(arrNum.indexOf('9') > -1) {
      return 0
    }
  }
  return parseInt(num, radix) || 0;
}

function checkDigit (digit, digitArr) {
  var check = [
    2,
    4,
    5,
    7,
    8,
    10,
    11,
    13
  ];

  // console.log('array length: %s', digitArr.length);
  // console.log('check length: %s', check.length);

  var result = digitArr.map(function(d, index){
    // console.log(check[index]);
    return (parseInt(d, 10)) * check[index];
  });

  // console.log('--=-=--=-=-=-=-=');
  // console.log(result);

  var num = result.reduce(function(a, b){
    // console.log('%s + %s = %s', a, b, a + b);
    return a + b;
  });


  // console.log('--=-=--=-=-=-=-=');
  // console.log(num);
  // console.log((num%27) === 0);



  return (num % 27) === digit;

};

module.exports.problem2 = function(dataSet) {

  dataSet.forEach(function(str, index){


    var data = str.substring(0,9);
    var checkDigArr = data.substring(0,8);
    var digit = data.substring(8,9);


    // var data = str.split('');
    
    console.log(parseInt(digit,27));

    // var checkDigitArr = data.splice(0,8);
    // var digit = parseInt(data[0],27);

    // var valid = checkDigit(digit, checkDigitArr);

    // if(!valid){
    //   console.log('%s INVALID', index + 1);
    // } else {
    //   console.log('%s %s', index + 1, str);
    // }

    // console.log(checkDigitArr);
    // console.log(digit);
    

    // console.log('===> %s',checkDigit(digit, checkDigitArr))
  });
  
};

// var testData = [
//   '12345678A',
//   '12435678A',
//   '12355678A'
// ];


// module.exports.problem2(testData);