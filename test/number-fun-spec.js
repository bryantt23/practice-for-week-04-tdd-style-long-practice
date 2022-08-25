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

describe('reciprocal', function () {});
