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

  describe("countVowels", () => {
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

  describe("findLongestWord", () => {
    it("should throw error if null", () => {
      expect(() => validator.findLongestWord(null)).to.throw(
        "Input must not be null"
      );
    });

    it("should throw error if not a string", () => {
      expect(() => validator.findLongestWord(100)).to.throw(
        "Input must be a string"
      );
    });

    it("should return 0 if empty", () => {
      expect(validator.findLongestWord("")).to.equal("");
    });

    it("should return 0 if ony spaces", () => {
      expect(validator.findLongestWord("     ")).to.equal("");
    });

    it("should return the same provided word", () => {
      expect(validator.findLongestWord("hello")).to.equal("hello");
    });

    it("should return jumps", () => {
      expect(
        validator.findLongestWord("The quick brown fox jumps over the lazy dog")
      ).to.equal("quick");
    });

    it("should return provided word with no punctuation", () => {
      expect(validator.findLongestWord("Hello, world!")).to.equal("hello");
    });

    it("should return cat, first word with same lengths", () => {
      expect(validator.findLongestWord("cat bat mat")).to.equal("cat");
    });

    it("should return quick, string with numbers", () => {
      expect(
        validator.findLongestWord("The quick brown fox jumps 123 times.")
      ).to.equal("quick");
    });

    it("should return hello, string with special characters", () => {
      expect(validator.findLongestWord("@Hello#world$%^&*()!")).to.equal(
        "hello"
      );
    });

    it("should return abc, string with mixed characters", () => {
      expect(validator.findLongestWord("123abc!@#def456ghi")).to.equal("abc");
    });

    it("should return quick, long string", () => {
      expect(
        validator.findLongestWord(
          "The quick brown fox jumps over the lazy dog 1234567890!@#$%^&*()"
        )
      ).to.equal("quick");
    });
  });

  describe("findSecondLargest", () => {
    it("should throw error if null", () => {
      expect(() => validator.findSecondLargest(null)).to.throw(
        "Input must not be null"
      );
    });

    it("should throw error, if not an array", () => {
      expect(() => validator.findSecondLargest(123)).to.throw(
        "Input must be an array"
      );
    });

    it("should throw an error if array fewer than 2 numbers", () => {
      expect(() => validator.findSecondLargest([1])).to.throw(
        "Array must contain at least two unique numbers"
      );
    });

    it("should throw error if all duplicates", () => {
      expect(() => validator.findSecondLargest([1, 1, 1, 1, 1])).to.throw(
        "Array must contain at least two unique numbers"
      );
    });

    it("should return 1, array with 2 numbers", () => {
      expect(validator.findSecondLargest([1, 2])).to.equal(1);
    });

    it("should return 40, array with duplicates", () => {
      expect(
        validator.findSecondLargest([10, 20, 20, 30, 30, 40, 50])
      ).to.equal(40);
    });

    it("should return -20, array with negative numbers", () => {
      expect(validator.findSecondLargest([-10, -20, -30, -40, -50])).to.equal(
        -20
      );
    });

    it("should return 20, array with negative and positive", () => {
      expect(validator.findSecondLargest([-10, 20, -30, 40, -50])).to.equal(20);
    });

    it("should throw error if array fewer than 2 numbers", () => {
      expect(() => validator.findSecondLargest([1])).to.throw(
        "Array must contain at least two unique numbers"
      );
    });

    it("should throw error if array with all duplicates", () => {
      expect(() => validator.findSecondLargest([1, 1, 1, 1, 1])).to.throw(
        "Array must contain at least two unique numbers"
      );
    });

    it("should return 9, large array", () => {
      expect(
        validator.findSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      ).to.equal(9);
    });
  });

  describe("filterNumbers", () => {
    it("should throw error if null", () => {
      expect(() => validator.filterEvenNumbers(null)).to.throw(
        "Input must not be null"
      );
    });

    it("should throw error if not an array", () => {
      expect(() => validator.filterEvenNumbers(50)).to.throw(
        "Input must be an array"
      );
    });

    it("should throw error if different than numbers", () => {
      expect(() => validator.filterEvenNumbers([1, 2, "3"])).to.throw(
        "Array must contain only numbers"
      );
    });

    it("should return 2,4,6 (even numbers)", () => {
      expect(validator.filterEvenNumbers([1, 2, 3, 4, 5, 6])).to.deep.equal([
        2, 4, 6,
      ]);
    });

    it("should return empty array if no even numbers", () => {
      expect(validator.filterEvenNumbers([1, 3, 5, 7, 9])).to.deep.equal([]);
    });

    it("should return 2,4,6,8,10, array with all even numbers", () => {
      expect(validator.filterEvenNumbers([2, 4, 6, 8, 10])).to.deep.equal([
        2, 4, 6, 8, 10,
      ]);

      it("should return -2,-4,6,-8, array with negative numbers", () => {
        expect(validator.filterEvenNumbers([-2, -4, -6, -8])).to.deep.equal([
          -2, -4, -6, -8,
        ]);
      });

      it("should return -2,-4,-6 array with both negative and positive numbers", () => {
        expect(validator.filterEvenNumbers([-2, 3, -4, 5, -6])).to.deep.equal([
          -2, -4, -6,
        ]);
      });

      it("should return [] if empty array", () => {
        expect(validator.filterEvenNumbers([])).to.deep.equal([]);
      });
    });

    describe.only("countUniqueCharacters", () => {
      it("should return 7", () => {
        expect(validator.countUniqueCharacters("hello world")).to.equal(7);
      });
    });
  });
});
