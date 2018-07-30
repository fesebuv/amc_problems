

'use strict';

const fs = require('fs');
const readline = require('readline');
const equal = require('deep-equal');
const { inputReader, outputReader } = require('./helpers/fileReader');

const problem1 = require('./problem1/problem1').problem1;
const problem2 = require('./problem2/problem2').problem2;

const file1 = inputReader('../../src/problem1/problem1.in');
const file2 = inputReader('../../src/problem2/problem2.in');

const outputFile1 = outputReader('../../src/problem1/problem1.out');
const outputFile2 = outputReader('../../src/problem2/problem2.out');

const files = ['problem1'];

files.forEach(function (file) {
  console.log(file, '<<< file');
});

file1
  .then((data) => problem1(data))
  .then((p1) => {
    outputFile1.then((out) => {
      console.log(`is problem1 resolved? ${equal(p1, out)}`);
    });
  });

// file2.then((data) => {
//   return problem2(data);
// })
// .then((p2) => {
//   outputFile2.then((out) => {
//     console.log(p2);
//   //   console.log(`is problem2 resolved? ${equal(p2, out)}`);
//   });
// });
