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
  assert.equal(5, calculator.runningTotal)
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

it('it should be able to multiply 3x5 and get 15', function(){
  calculator.numberClick(3)
  calculator.operatorClick('*')
  calculator.numberClick(5)
  calculator.operatorClick('=')
  assert.equal(15, calculator.previousTotal)
})

it('it should be able to divide 21/7 and get 3', function(){
  calculator.numberClick(21)
  calculator.operatorClick('/')
  calculator.numberClick(7)
  calculator.operatorClick('=')
  assert.equal(3, calculator.previousTotal)
})

it('it should be able to add 1+4 and get 5', function(){
  calculator.numberClick(1)
  calculator.operatorClick('+')
  calculator.numberClick(4)
  calculator.operatorClick('=')
  assert.equal(5, calculator.previousTotal)
})

it('it should be able to subtract 7-4 and get 3', function(){
  calculator.numberClick(7)
  calculator.operatorClick('-')
  calculator.numberClick(4)
  calculator.operatorClick('=')
  assert.equal(3, calculator.previousTotal)
})

it('it should be able to sconcatenate multiple number button clicks', function(){
  calculator.numberClick(5)
  calculator.numberClick(6)
  calculator.numberClick(4)
  assert.equal(564, calculator.runningTotal)
})

it('it should be able to chain multiple operations together', function(){
  calculator.numberClick(5)
  calculator.operatorClick('+')
  calculator.numberClick(9)
  calculator.operatorClick('/')
  calculator.numberClick(2)
  calculator.operatorClick('*')
  calculator.numberClick(4)
  calculator.operatorClick('=')
  assert.equal(28, calculator.runningTotal)
})

it('it should be able to clear the running total without affecting the calculation', function(){
  calculator.numberClick(5)
  calculator.operatorClick('+')
  calculator.numberClick(9)
  calculator.operatorClick('/')
  calculator.numberClick(2)
  calculator.clearClick()
  calculator.numberClick(7)
  calculator.operatorClick('=')
  assert.equal(2, calculator.runningTotal)
})


});
