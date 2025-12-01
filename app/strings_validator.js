class StringsValidator {
  capitalize(word) {
    if (word == null) {
      throw new Error("Input must not be null");
    }
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
    if (word.length < 1) {
      throw new Error("Input cannot be empty");
    }
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}

module.exports = StringsValidator;
