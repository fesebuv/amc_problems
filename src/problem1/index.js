const { writeToFile } = require('../helpers/');

function greaterThan8(num) {
  const arrNum = num.split('');
  return (arrNum.indexOf('9') > -1 || arrNum.indexOf('8') > -1);
}

function getNum(num, radix) {
  if(radix === 8 && greaterThan8(num)){
    return 0;
  }
  return parseInt(num, radix) || 0;
}

function problem1(dataSet) {
  const data = dataSet.map((num, index) => {
    return `${index + 1} ${getNum(num,8)} ${getNum(num,10)} ${getNum(num,16)}`;
  });
  writeToFile(data, 'problem1');
};

module.exports =  {
  default: problem1
};
