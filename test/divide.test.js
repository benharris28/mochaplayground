const divide = require('../index');
const chai = require('chai');
const expect = chai.expect;

describe('Divide function', () => {
    it('should divide positive integers correctly', () => {
        const a = 8;
        const b = 4;
        const expectedAnswer = 2;
      
        // invoke the function
        const actualAnswer = divide(a, b);
      
        // assert that expected === actual
        expect(actualAnswer).to.equal(expectedAnswer);
    });
  
    it('should throw an error when divide by zero', () => {
      const a = 8, b = 0;

      const fn = () => { divide(a,b) };

      expect(fn).to.throw();
    });
    it('should only evaluate numbers', () => {
        const a = 2, b = "3";
        const fn = () => {divide(a,b)};
        expect(a).to.equal(b, 'hello');
    })

  });

  