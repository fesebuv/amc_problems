const { writeToFile } = require('../helpers/');

function candlesForhanukah(candles) {
  let total = 0;
  for(let i = candles + 1; i >= 2; i-- ) {
    total = total + i;
  }
  return total * 1;
}

function problem1_2017(dataSet) {
  const data = dataSet.map((num, index) => {
    const candles = num * 1;
    return `${index + 1} ${candlesForhanukah(candles)}`;
  });
  writeToFile(data, 'problem1_2017');
};


module.exports =  {
  default: problem1_2017
};
