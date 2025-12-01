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
      expect(() => validator.capitalize("")).to.throw("Input cannot be empty");
    });

    it("should capitalize word", () => {
      expect(validator.capitalize("adrian")).to.equal("Adrian");
    });
  });
});
