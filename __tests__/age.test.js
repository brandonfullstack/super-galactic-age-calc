import Age from './../src/age.js';

describe('Age', () => {

  test('should correctly initialize the age class', () => {
    const earthAge = new Age(56);
    expect(earthAge).toEqual({ "age": 56 });
  });

  describe("getMercuryAge()", () => {
    test("should return the correct Mercury age for an Earth age of 56", () => {
      const earthAge = new Age(56);
      expect(earthAge.getMercuryAge()).toEqual(13.44);
    });

  });

});
