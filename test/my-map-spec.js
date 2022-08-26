// Your code here
const { assert } = require('chai');
const chai = require('chai');
const expect = chai.expect;
const myMap = require('../problems/my-map');

describe('myMap', function () {
  let array;
  beforeEach(() => {
    array = [1, 2, 3];
  });

  it('should return doubled numbers array', function () {
    const res = myMap(array, a => a * 2);
    assert.deepEqual(res, [2, 4, 6]);
  });
});
