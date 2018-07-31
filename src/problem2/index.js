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
  return num * 1;
}

function cleanData(input) {
  const arr = input.split('');

  return arr
    .map(function (chr) {
      if(charMap.hasOwnProperty(chr)) {
        return charMap[chr];
      }
      return chr;
    })
    .map(function (chr) {
      const index = modifyBase27.indexOf(chr);
      if( index > -1) {
        return base27[index];
      }
    })
    .join('');
}


function getCheckSum(digits) {
  const arr = digits.split('');
  const sum = arr
    .map(function (chr) {
      return base27To10(chr);
    })
    .map(function (num, index) {
      const check = checkDigitArr[index];
      return num * check;
    })
    .reduce(function (acc, curr) {
      return acc + curr;
    }, 0);

  return sum % 27;
}

function calculateCheckSum(input) {
  const stringArr = input.split('');
  const checkDigit = stringArr.pop();
  const checkPhrase = stringArr.join('');

  const checkSum = getCheckSum(checkPhrase);
  const num = base27To10(checkDigit);


  if(num === checkSum) {
    return base27To10(checkPhrase);
  } else {
    return 'Invalid';
  }

}

function problem2(dataSet) {
  const data =  dataSet.map(function (input, index) {
    const cleanInput = cleanData(input);
    const checkSum = calculateCheckSum(cleanInput);
    return `${index + 1} ${checkSum}`;
  });
  writeToFile(data, 'problem2');
}

module.exports =  {
  default: problem2
};
