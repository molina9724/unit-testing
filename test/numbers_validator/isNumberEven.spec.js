const { expect } = require('chai');
const { it, describe, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

describe('NumbersValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('isNumberEven', () => {
    it('should return true if number is even', () => {
      expect(validator.isNumberEven(4)).to.be.equal(true);
    });

    it('should return false if number is odd', () => {
      expect(validator.isNumberEven(5)).to.be.equal(false);
    });

    it('should throw an error if number is not a number', () => {
      expect(() => validator.isNumberEven('A')).to.throw(
        '[A] is not of type "Number" it is of type "string"',
      );
    });
  });

  describe('getEvenNumbersFromArray', () => {
    it('should return an array of even numbers', () => {
      const array = validator.getEvenNumbersFromArray([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ]);
      expect(array).to.be.deep.equal([2, 4, 6, 8, 10]);
    });

    it('should throw an error if array contains invalid types', () => {
      const array = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(() => validator.getEvenNumbersFromArray(array)).to.throw(
        `[${array}] is not an array of "Numbers"`,
      );
    });

    it('should throw an error if array is not an array', () => {
      const array = 'a';
      expect(() => validator.getEvenNumbersFromArray(array)).to.throw(
        `[${array}] is not an array of "Numbers"`,
      );
    });
  });

  describe('isAllNumbers', () => {
    it('should return true if all elements are numbers', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(validator.isAllNumbers(array)).to.be.equal(true);
    });

    it('should return false if array contains invalid types', () => {
      const array = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(validator.isAllNumbers(array)).to.be.equal(false);
    });

    it('should throw an error if array is not an array', () => {
      const array = 'a';
      expect(() => validator.isAllNumbers(array)).to.throw(
        `[${array}] is not an array`,
      );
    });
  });

  describe('isInteger', () => {
    it('should return true if number is an integer', () => {
      expect(validator.isInteger(4)).to.be.equal(true);
    });

    it('should return false if number is not an integer', () => {
      expect(validator.isInteger(4.5)).to.be.equal(false);
    });

    it('should throw an error if number is not a number', () => {
      expect(() => validator.isInteger('A')).to.throw('[A] is not a number');
    });
  });
});
