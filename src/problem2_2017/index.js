const { writeToFile } = require('../helpers/');

function test(base, num) {
  const number = num * 1;
  const numStr = number.toString(base);
  const numArr = numStr.split('');
  const add = numArr
    .map(function (elem) {
      return parseInt(elem, base);
    }).reduce(function (aggr, curr) {
      return aggr + Math.pow(curr, 2);
    }, 0);
  return add;
}

function problem2_2017(dataSet) {
  const data = dataSet.map((input, index) => {
    const [ base, num ] = input;
    return `${index + 1} ${test(base, num)}`;
  });
  writeToFile(data, 'problem2_2017');
};


module.exports =  {
  default: problem2_2017
};
