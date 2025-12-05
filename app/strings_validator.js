class StringsValidator {
  capitalize(word) {
    if (word == null) {
      throw new Error("Input must not be null");
    }
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
    if (word.length < 1) {
      throw new Error("Input must not be empty");
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
    let splitWord = word.trim().split(" ");
    let removeSpaces = splitWord.filter((space) => Boolean(space));
    removeSpaces = removeSpaces.reverse();
    let joinWord = removeSpaces.join(" ");
    return joinWord;
  }

  fizzBuzz(number) {
    if (number == null) {
      throw new Error("Input must not be null");
    }
    if (typeof number !== "number") {
      throw new Error("Input must be a number");
    }
    if (number <= 0) {
      throw new Error("Input must be a positive number");
    }
    if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    }
    if (number % 3 === 0) {
      return "Fizz";
    }
    if (number % 5 === 0) {
      return "Buzz";
    }
    return `${number}`;
  }

  firstNonRepeatingChar(string) {
    if (string == null) {
      throw new Error("Input must not be null");
    }
    if (typeof string !== "string") {
      throw new Error("Input must be a string");
    }
    if (string.trim().length < 1) {
      throw new Error("Input must not be empty");
    }
    string = string.toLowerCase();
    const map = new Map();
    for (let element of string) {
      if (map.has(element)) {
        map.set(element, map.get(element) + 1);
      } else {
        map.set(element, 1);
      }
    }
    for (let element of string) {
      if (map.get(element) === 1) {
        return element;
      }
    }
    return null;
  }

  countVowels(string) {
    if (string == null) {
      throw new Error("Input must not be null");
    }
    if (typeof string !== "string") {
      throw new Error("Input must be a string");
    }
    string = string.replace(/[^a-zA-Z]/g, "");
    if (string.trim().length < 1) {
      return 0;
    }
    string = string.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    let cont = 0;
    for (const element of string) {
      if (vowels.includes(element)) {
        cont++;
      }
    }
    return cont;
  }

  findLongestWord(string) {
    if (string == null) {
      throw new Error("Input must not be null");
    }
    if (typeof string !== "string") {
      throw new Error("Input must be a string");
    }
    if (string.trim().length < 1) {
      return "";
    }
    string = string.replace(/[^a-zA-Z]/g, " ");
    let splitSentence = string.toLowerCase().split(" ");
    let filteredWords = splitSentence.filter((word) => word.length > 0);
    const uniqueWords = [...new Set(filteredWords)];
    let longestWordLength = 0;
    let longestWord = "";
    for (const element of uniqueWords) {
      if (element.length > longestWordLength) {
        longestWordLength = element.length;
        longestWord = element;
      }
    }
    return longestWord;
  }

  findSecondLargest(array) {
    if (array == null) {
      throw new Error("Input must not be null");
    }

    if (!Array.isArray(array)) {
      throw new Error("Input must be an array");
    }

    array = array.sort(function (a, b) {
      return b - a;
    });
    const largestNumber = array[0];
    let secondLargestNumber;
    for (const element of array) {
      if (element < largestNumber) {
        secondLargestNumber = element;
        return secondLargestNumber;
      }
    }
    throw new Error("Array must contain at least two unique numbers");
  }

  filterEvenNumbers(array) {
    if (array == null) {
      throw new Error("Input must not be null");
    }
    if (!Array.isArray(array)) {
      throw new Error("Input must be an array");
    }
    let hasNonNumericValues = array.some(
      (element) => typeof element !== "number" || Number.isNaN(element)
    );
    if (hasNonNumericValues) {
      throw new Error("Array must contain only numbers");
    }
    let evenNumbers = array.filter((num) => num % 2 === 0);
    return evenNumbers;
  }
}

module.exports = StringsValidator;
