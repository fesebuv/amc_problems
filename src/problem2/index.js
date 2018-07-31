const { writeToFile } = require('../helpers/');

var charMap = {
  B: '8',
  G: 'C',
  I: '1',
  O: '0',
  Q: '0',
  S: '5',
  U: 'V',
  Y: 'V',
  Z: '2'
};

var base27 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'];
var modifyBase27 = ['0','1','2','3','4','5','6','7','8','9','A','C','D','E','F','H','J','K','L','M','N','P','R','T','V','W','X'];

var checkDigitArr = [2, 4, 5, 7, 8, 10, 11, 13];

function base27To10(str) {
  const num = parseInt(str, 27).toString(10);
  return num;
}

function cleanData(input) {
  var arr = input.split('');

  return arr
    .map(function (chr) {
      if(charMap.hasOwnProperty(chr)) {
        return charMap[chr];
      }
      return chr;
    })
    .map(function (chr) {
      var index = modifyBase27.indexOf(chr)
      if( index > -1) {
        return base27[index];
      }
    })
    .join('');
}


function getCheckSum(digits) {
  var arr = digits.split('');
  var sum = arr
    .map(function (chr) {
      return base27To10(chr);
    })
    .map(function (num, index) {
      var check = checkDigitArr[index];
      return num * check;
    })
    .reduce(function (acc, curr) {
      return acc + curr;
    }, 0);

  return sum % 27;
}

function calculateCheckSum(input) {
  var stringArr = input.split('');
  var checkDigit = stringArr.pop();
  var checkPhrase = stringArr.join('');

  var checkSum = getCheckSum(checkPhrase);
  var num = base27To10(checkDigit);


  if(num * 1 === checkSum) {
    return base27To10(checkPhrase)*1;
  } else {
    return 'Invalid';
  }

}

function problem2(dataSet) {
  console.log(dataSet[0], '<< dataSet')
  const data =  dataSet.map(function (input, index) {
    var cleanInput = cleanData(input);
    const checkSum = calculateCheckSum(cleanInput);
    return `${index + 1} ${checkSum}`;
  });
  writeToFile(data, 'problem2');
}

module.exports =  {
  default: problem2
};
