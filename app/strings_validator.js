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
    const splitWord = word.trim().split(" ");
    let removeSpaces = splitWord.filter((space) => Boolean(space));
    removeSpaces = removeSpaces.reverse();
    const joinWord = removeSpaces.join(" ");
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
    const lowerCaseString = string.toLowerCase();
    const lowerCaseArray = lowerCaseString.split("");
    const map = new Map();

    lowerCaseArray.forEach((element) => {
      if (map.has(element)) {
        map.set(element, map.get(element) + 1);
      } else {
        map.set(element, 1);
      }
    });

    const results = lowerCaseArray.find((element) => map.get(element) === 1);
    if (results) {
      return results;
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
    const cleanString = string.replace(/[^a-zA-Z]/g, "");
    if (string.trim().length < 1) {
      return 0;
    }
    const lowerCaseArray = cleanString.toLowerCase().split("");
    const vowels = ["a", "e", "i", "o", "u"];
    const newArray = lowerCaseArray.filter((element) =>
      vowels.includes(element)
    );
    return newArray.length;
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
    const cleanString = string.replace(/[^a-zA-Z]/g, " ").toLowerCase();
    const splitSentence = cleanString.split(" ");
    const filteredWords = splitSentence.filter((word) => word.length > 0);
    const uniqueWords = new Set(filteredWords);
    let longestWordLength = 0;
    let longestWord = "";

    uniqueWords.forEach((element) => {
      if (element.length > longestWordLength) {
        longestWordLength = element.length;
        longestWord = element;
      }
    });
    return longestWord;
  }

  findSecondLargest(array) {
    if (array == null) {
      throw new Error("Input must not be null");
    }

    if (!Array.isArray(array)) {
      throw new Error("Input must be an array");
    }

    const sortedArray = array.sort(function (a, b) {
      return b - a;
    });
    const largestNumber = sortedArray[0];
    const secondLargestNumber = sortedArray.find(
      (element) => element < largestNumber
    );
    if (secondLargestNumber) {
      return secondLargestNumber;
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
    const hasNonNumericValues = array.some(
      (element) => typeof element !== "number" || Number.isNaN(element)
    );
    if (hasNonNumericValues) {
      throw new Error("Array must contain only numbers");
    }
    const evenNumbers = array.filter((num) => num % 2 === 0);
    return evenNumbers;
  }

  countUniqueCharacters(string) {
    if (string == null) {
      throw new Error("Input must not be null");
    }
    if (typeof string !== "string") {
      throw new Error("Input must be a string");
    }
    if (string.trim().length < 1) {
      return 0;
    }
    const cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const uniqueChars = new Set(cleanString);
    return uniqueChars.size;
  }

  isValidPhoneNumber(phoneNumber) {
    if (phoneNumber == null) {
      throw new Error("Input must not be null");
    }
    if (typeof phoneNumber !== "string") {
      throw new Error("Input must be a string");
    }
    return phoneNumber.length === 10;
  }

  formatPhoneNumber(phoneNumber) {
    const cleanPhoneNumber = phoneNumber.trim().replace(/\D/g, "");
    if (this.isValidPhoneNumber(cleanPhoneNumber)) {
      return `(${cleanPhoneNumber.slice(0, 3)}) ${cleanPhoneNumber.slice(
        3,
        6
      )}-${cleanPhoneNumber.slice(6)}`;
    }
    throw new Error("Invalid phone number");
  }
}

module.exports = StringsValidator;
