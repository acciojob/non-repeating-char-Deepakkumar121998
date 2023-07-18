//your JS code here. If required.
function findFirstNonRepeatedChar(str) {
  let charCount = {};

  // Count the occurrence of each character in the string
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character found, return null
  return null;
}

const input = prompt("Enter a string:");
const result = findFirstNonRepeatedChar(input);

if (result !== null) {
  alert("The first non-repeated character is: " + result);
} else {
  alert("No non-repeated character found.");
}
