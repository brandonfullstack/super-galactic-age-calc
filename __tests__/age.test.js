import Age from './../src/age.js';

describe('Age', () => {

  test('should correctly initialize the age class', () => {
    const age = new Age(56);
    expect(age).toEqual({ "age": 56 });
  });

});