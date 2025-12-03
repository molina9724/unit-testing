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

  reverseWords(word) {
    if (word == null) {
      throw new Error("Input must not be null");
    }
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
    if (word.trim().length < 1) {
      throw new Error("Input must not be empty");
    }
    if (word.length < 1) {
      throw new Error("Input cannot be empty");
    }
    let splitWord = word.trim().split(" ");
    let removeSpaces = splitWord.filter((space) => Boolean(space));
    removeSpaces = removeSpaces.reverse();
    let joinWord = removeSpaces.join(" ");
    return joinWord;
  }
}

module.exports = StringsValidator;
