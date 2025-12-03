const { expect } = require("chai");
const StringsValidator = require("../../app/strings_validator");

describe("StringsValidator", () => {
  let validator;

  beforeEach(() => {
    validator = new StringsValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe("capitalize", () => {
    it("should throw error if null", () => {
      expect(() => validator.capitalize(null)).to.throw(
        "Input must not be null"
      );
    });

    it("should throw error if not a string", () => {
      expect(() => validator.capitalize(8)).to.throw("Input must be a string");
    });

    it("should throw error if empty", () => {
      expect(() => validator.capitalize("")).to.throw(
        "Input must not be empty"
      );
    });

    it("should capitalize word", () => {
      expect(validator.capitalize("adrian")).to.equal("Adrian");
    });
  });

  describe("reverseWords", () => {
    it("should throw error if null", () => {
      expect(() => validator.reverseWords(null)).to.throw(
        "Input must not be null"
      );
    });

    it("should throw error if not a string", () => {
      expect(() => validator.reverseWords(50)).to.throw(
        "Input must be a string"
      );
    });

    it("should throw error if empty", () => {
      expect(() => validator.reverseWords("")).to.throw(
        "Input must not be empty"
      );
    });

    it("it should throw error if only spaces", () => {
      expect(() => validator.reverseWords("     ")).to.throw(
        "Input must not be empty"
      );
    });

    it("should be the same word with no changes", () => {
      expect(validator.reverseWords("Hola")).to.equal("Hola");
    });

    it("should reverse sentence", () => {
      expect(validator.reverseWords("Hola papa")).to.equal("papa Hola");
    });

    it("should reverse sentence with special characters", () => {
      expect(validator.reverseWords("C@arlos, Sergio's and myself.")).to.equal(
        "myself. and Sergio's C@arlos,"
      );
    });

    it("should remove extra spaces in between and reverse sentence", () => {
      expect(validator.reverseWords("Hola   papa")).to.equal("papa Hola");
    });

    it("should remove leading/trailing spaces and reverse sentence", () => {
      expect(validator.reverseWords("   Hola papa   ")).to.equal("papa Hola");
    });

    it("should remove multiple spaces in between and leading/trailing spaces and reverse sentence", () => {
      expect(validator.reverseWords("   Hola   papa   ")).to.equal("papa Hola");
    });

    describe("fizzBuzz", () => {
      it("should throw an error if null", () => {
        expect(() => validator.fizzBuzz(null)).to.throw(
          "Input must not be null"
        );
      });

      it("should throw an error if not a number", () => {
        expect(() => validator.fizzBuzz("Hello")).to.throw(
          "Input must be a number"
        );
      });

      it("should throw error if <0", () => {
        expect(() => validator.fizzBuzz(-10)).to.throw(
          "Input must be a positive number"
        );
      });

      it("should throw error if =0", () => {
        expect(() => validator.fizzBuzz(0)).to.throw(
          "Input must be a positive number"
        );
      });

      it("should return FizzBuzz if divisible by 3 and 5", () => {
        expect(validator.fizzBuzz(15)).to.equal("FizzBuzz");
      });

      it("should return Fizz if divisible by 3", () => {
        expect(validator.fizzBuzz(3)).to.equal("Fizz");
      });

      it("should return Buzz if divisible by 5", () => {
        expect(validator.fizzBuzz(5)).to.equal("Buzz");
      });

      it("should return number if not divisible by either 3 or 5", () => {
        expect(validator.fizzBuzz(11)).to.equal("11");
      });
    });
  });
});
