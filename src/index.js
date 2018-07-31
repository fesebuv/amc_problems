const { inputReader, outputReader, FILES } = require('./helpers/');

FILES.forEach(function (fileName) {
  const problem = require(`./${fileName}/`).default;
  const fileLoc = `../../src/${fileName}/data.in`;
  const file = inputReader(fileLoc);

  file.then((data) => problem(data));
});
