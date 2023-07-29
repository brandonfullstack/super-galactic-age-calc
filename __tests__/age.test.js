import Age from './../src/age.js';

describe('Age', () => {

  test('should correctly initialize the age class', () => {
    const earthAge = new Age(56);
    expect(earthAge).toEqual({ "age": 56 });
  });

});
