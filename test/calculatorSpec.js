
var assert = require('assert');
require('../script.js');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  describe('setNumber', function() {
    it('should return 0.1 when the second argument is period', function() {
      assert.equal('.', calculateMe.setNumber('0.1', '.'));
    });
  });

});

