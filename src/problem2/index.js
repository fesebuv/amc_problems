const { writeToFile } = require('../helpers/');

const charMap = {
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

const base27 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'];
const givenBase27 = ['0','1','2','3','4','5','6','7','8','9','A','C','D','E','F','H','J','K','L','M','N','P','R','T','V','W','X'];
const checkDigitArr = [2, 4, 5, 7, 8, 10, 11, 13];

function base27To10(str) {
  const num = parseInt(str, 27).toString(10);
  return num * 1;
}

function normalizeData(input) {
  const arr = input.split('');
  return arr
    .map((chr) => {
      if(charMap.hasOwnProperty(chr)) {
        return charMap[chr];
      }
      return chr;
    })
    .map((chr) => {
      const index = givenBase27.indexOf(chr);
      if( index > -1) {
        return base27[index];
      }
      return chr;
    })
    .join('');
}


function getCheckSum(digitArr) {
  const sum = digitArr
    .map((chr) => base27To10(chr))
    .map((num, index) => num * checkDigitArr[index])
    .reduce((acc, curr) => acc + curr, 0);

  return sum % 27;
}

function calculateCheckSum(input) {
  const stringArr = input.split('');
  const checkDigit = stringArr.pop();
  const num = base27To10(checkDigit);
  const checkSum = getCheckSum(stringArr);
  const checkPhrase = stringArr.join('');

  if(num !== checkSum) {
    return 'Invalid';
  }

  return base27To10(checkPhrase);
}

function problem2(dataSet) {
  const data = dataSet.map((input, index) => {
    const cleanInput = normalizeData(input);
    const checkSum = calculateCheckSum(cleanInput);
    return `${index + 1} ${checkSum}`;
  });
  writeToFile(data, 'problem2');
}

module.exports =  {
  default: problem2
};
