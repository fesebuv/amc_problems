'use strict';

const expect = require('chai').expect;
const problem1 = require('../../src/problem1/problem1').problem1;

describe('define problem1', function() {
  it('should `problem1` to be a defined function', function(){
    expect(problem1).to.be.a('function');
  });
});
