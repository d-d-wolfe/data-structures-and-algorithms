'use strict';

function repeatedWord(str) {
  let max = 0;
  let maxWord = '';
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    let count = 0;
    let word = '';

    for (let j = 0; j < words.length; j++) {
      if (j !== i && words[i] === words[j]) {
        count++;
        word = words[i];
      }
    }
    if (count > maxWord) {
      max = count;
      maxWord = word;
    }
  }
  return maxWord;
}

console.log(repeatedWord('Once upon a time, there was a brave princess who..'));

module.exports = repeatedWord;