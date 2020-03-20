var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should be able to add', function(){
    calculator.previousTotal = 4;
    calculator.add(1)
    assert.equal(calculator.runningTotal, 5)
  })

  it('it should be able to subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should be able to multiply', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('should be able to divide', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  it('should be able to concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    assert.equal(calculator.runningTotal, 10);
  })

  it('should be able to chain multiple operations together', function(){
    calculator.numberClick(20);
    calculator.operatorClick('-')
    calculator.subtract(10);
    calculator.operatorClick('*')
    calculator.multiply(2);
    assert.equal(calculator.runningTotal, 20);
  })

  it('should be able to clear running total when clearClick is called', function() {
    calculator.numberClick(6);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 6);
  })
});
