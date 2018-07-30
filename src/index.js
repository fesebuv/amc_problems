
const readline = require('readline');
const equal = require('deep-equal');
const { inputReader, outputReader, FILES } = require('./helpers/fileReader');

FILES.forEach(function (fileName) {
  const problem = require(`./${fileName}/`).default;
  const fileLoc = `../../src/${fileName}/data.in`;
  const file = inputReader(fileLoc);

  file.then((data) => problem(data));
});
