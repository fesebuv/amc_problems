
const equal = require('deep-equal');
const { inputReader, outputReader } = require('./helpers/fileReader');

const files = ['problem1', 'problem2'];

files.forEach(function (fileName) {
  const problem = require(`./${fileName}/`).default;
  const fileLoc = `../../src/${fileName}/data.in`;
  const file = inputReader(fileLoc);
  file
    .then((data) => problem(data))
    .then((result) => {
      const outputLoc = `../../src/${fileName}/data.out`;
      const outputFile = outputReader(outputLoc);
      outputFile.then((out) => {
        console.log(`is ${fileName} resolved? ${equal(result, out)}`);
      });
    });
});
