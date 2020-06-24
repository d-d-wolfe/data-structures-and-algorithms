'use strict';

function multiBracketValidation(input) {
  let testArr = [];
  let map = {
    '(':')',
    '[':']',
    '{':'}',
  };

  for (let i = 0; i < input.length; i++) {

    if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
      testArr.push(input[i]);
    } else {
      let last = testArr.pop();
      if (input[i] !== map[last]) {

        return false;
      }
    }
  }

  if (testArr.length !== 0) {

    return false;
  }
  return true;
}

module.exports = multiBracketValidation;
