// Your code here
const { assert } = require('chai');
const chai = require('chai');
const expect = chai.expect;
const { reciprocal, returnsThree } = require('../problems/number-fun');

describe('returnsThree', function () {
  it('should return 3', function () {
    const res = returnsThree();
    assert.equal(res, 3);
  });
});

describe('reciprocal', function () {
  it('should return 1/2 with 2 input', function () {
    const res = reciprocal(2);
    assert.equal(res, 1 / 2);
  });
  it('should return 1/100 with 100 input', function () {
    const res = reciprocal(100);
    assert.equal(res, 1 / 100);
  });
});
