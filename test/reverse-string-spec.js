// Your code here
const { assert } = require('chai');
const chai = require('chai');
const expect = chai.expect;
const reverseString = require('../problems/reverse-string');

describe('reverseString', function () {
  it('should return nuf with fun input', function () {
    const res = reverseString('fun');
    assert.equal(res, 'nuf');
  });
  it('should return cba with abc input', function () {
    const res = reverseString('abc');
    assert.equal(res, 'cba');
  });
});
