const { expect } = require('chai');
const { FILES, outputReader } = require('../src/helpers/');

describe('AMC problems', function () {
  FILES.forEach(function (fileName) {
    describe(`${fileName}`, function () {
      it(`is ${fileName} resolved?`, function () {
        const outputLoc = `../../build/${fileName}/output.txt`;
        const outputFile = outputReader(outputLoc);

        return outputFile.then((src) => {
          const expectedLoc = `../${fileName}/data.out`;
          const expectedFile = outputReader(expectedLoc);

          return expectedFile.then((out) => {
            expect(src).to.deep.equal(out);
          });
        });
      });
    });
  });
});
