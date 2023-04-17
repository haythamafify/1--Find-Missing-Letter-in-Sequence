function find_missing_letter_in(givenLetters) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let startindex = alpha.indexOf(givenLetters[0]);
  for (let index = 0; index < givenLetters.length; index++) {
    // console.log(givenLetters[index]);
    // console.log(alpha[startindex + index]);
    // console.log("==");
    if (givenLetters[index] != alpha[startindex + index]) {
      return alpha[startindex + index];
    }
  }
  return " No Missing Letter In Sequence";
}

console.log(find_missing_letter_in("abcdeghi")); // f
console.log(find_missing_letter_in("defgi")); // h
console.log(find_missing_letter_in("xyz")); // No Missing Letter In Sequence
