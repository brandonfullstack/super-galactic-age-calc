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

  describe("getVenusAge()", () => {
    test("should return the correct Venus age for an Earth age of 56", () => {
      const earthAge = new Age(56);
      expect(earthAge.getVenusAge()).toEqual(34.72);
    });
  });

  describe("getMarsAge()", () => {
    test("should return the correct Mars age for an Earth age of 56", () => {
      const earthAge = new Age(56);
      expect(earthAge.getMarsAge()).toEqual(105.28);
    });
  });

  describe("getJupiterAge()", () => {
    test("should return the correct Jupiter age for an Earth age of 56", () => {
      const earthAge = new Age(56);
      expect(earthAge.getJupiterAge()).toEqual(664.16);
    });
  });

});
