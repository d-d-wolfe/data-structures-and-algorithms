'use strict';

const validate = require('./multi-bracket-validation');

describe('Tests to make sure brackets are balanced', () => {
  it('Should return true if brackets are balanced, and false if they are not', () => {
    const input1 = '({[()]})';
    expect(validate(input1)).toStrictEqual(true);

    const input2 = '([{({}})}])';
    expect(validate(input2)).toStrictEqual(false);

    const input3 = '[)]';
    expect(validate(input3)).toStrictEqual(false);
  });
});
