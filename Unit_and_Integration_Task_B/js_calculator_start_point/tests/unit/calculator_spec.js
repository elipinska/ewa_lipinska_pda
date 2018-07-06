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
  calculator.previousTotal = 1
  calculator.add(17)
  assert.equal(18, calculator.runningTotal)
})

it('it should be able to subtract', function(){
  calculator.previousTotal = 5
  calculator.subtract(50)
  assert.equal(-45, calculator.runningTotal)
})

it('it should be able to multiply', function(){
  calculator.previousTotal = 12
  calculator.multiply(4)
  assert.equal(48, calculator.runningTotal)
})

it('it should be able to divide', function(){
  calculator.previousTotal = 36.7
  calculator.divide(4)
  assert.equal(9.175, calculator.runningTotal)
})

it('it should be able to save clicked numbers', function(){
  calculator.numberClick(5)
  calculator.numberClick(6)
  assert.equal(56, calculator.runningTotal)
})

it('it should be able to save clicked operator', function(){
  calculator.operatorClick('+')
  calculator.numberClick(6)
  assert.equal('+', calculator.previousOperator)
})

it('it should be able to clear with a click', function(){
  calculator.numberClick(6)
  calculator.operatorClick('+')
  calculator.clearClick()
  assert.equal(0, calculator.runningTotal)
  calculator.clearClick()
  assert.equal(null, calculator.previousOperator)
})

// The program should correctly perform the following tasks:
//
// multiply 3x5 and get 15
// divide 21/7 and get 3
// add 1+4 and get 5
// subtract 7-4 and get 3
// concatenate multiple number button clicks
// chain multiple operations together
// clear the running total without affecting the calculation


});
