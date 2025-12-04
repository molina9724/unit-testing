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

  describe("firstNonRepeatingChar", () => {
    it("should throw error if null", () => {
      expect(() => validator.firstNonRepeatingChar(null)).to.throw(
        "Input must not be null"
      );
    });

    it("should throw error if not string", () => {
      expect(() => validator.firstNonRepeatingChar(5)).to.throw(
        "Input must be a string"
      );
    });

    it("should throw error if empty", () => {
      expect(() => validator.firstNonRepeatingChar("")).to.throw(
        "Input must not be empty"
      );
    });

    it("should throw error if spaces", () => {
      expect(() => validator.firstNonRepeatingChar("     ")).to.throw(
        "Input must not be empty"
      );
    });

    it("should return the same single character a", () => {
      expect(validator.firstNonRepeatingChar("a")).to.equal("a");
    });

    it("should return a", () => {
      expect(validator.firstNonRepeatingChar("hhoolla")).to.equal("a");
    });

    it("should return null as characters repeat", () => {
      expect(validator.firstNonRepeatingChar("hhoollaa")).to.equal(null);
    });

    it("should return a despite case sensitivity", () => {
      expect(validator.firstNonRepeatingChar("HHhOOoLLlA")).to.equal("a");
    });

    it("should return space", () => {
      expect(validator.firstNonRepeatingChar("hh oolla")).to.equal(" ");
    });

    it("should return .", () => {
      expect(validator.firstNonRepeatingChar(".abc")).to.equal(".");
    });

    it("should return a with long strings", () => {
      expect(
        validator.firstNonRepeatingChar("b" + "a".repeat(100000))
      ).to.equal("b");
    });

    it("should return 😢 with unicode characters", () => {
      expect(validator.firstNonRepeatingChar("😊😊😢")).to.equal("😢");
    });
  });

  describe.only("countVowels", () => {
    it("should throw error if null", () => {
      expect(() => validator.countVowels(null)).to.throw(
        "Input must not be null"
      );
    });

    it("should throw error if not a string", () => {
      expect(() => validator.countVowels(10)).to.throw(
        "Input must be a string"
      );
    });

    it("should return 0 if empty string", () => {
      expect(validator.countVowels("")).to.equal(0);
    });

    it("should return 0 if spaces", () => {
      expect(validator.countVowels("     ")).to.equal(0);
    });

    it("should return 0 if no vowels", () => {
      expect(validator.countVowels("qwrtypsdfghjklñzxcvbnm")).to.equal(0);
    });

    it("should count lower case vowels and return 5", () => {
      expect(validator.countVowels("aseritoyu")).to.equal(5);
    });

    it("should count vowels upper case and return 5", () => {
      expect(validator.countVowels("AsErItOyU")).to.equal(5);
    });

    it("should count both upper and lower cases and return 10", () => {
      expect(validator.countVowels("AasEErIItOoyUu")).to.equal(10);
    });
  });
});
