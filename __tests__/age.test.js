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

  describe("getYearsSinceBirthday()", () => {
    test("should return the correct number of years since a past birthday", () => {
      const earthAge = new Age(56);
      expect(earthAge.getYearsSinceBirthday(43)).toEqual({"Earth Years": 13, "Mercury Years": 3.12, "Venus Years": 8.06, "Mars Years": 24.439999999999998, "Jupiter Years": 154.18});
    });
  });

  describe("getYearsUntilBirthday()", () => {
    test("should return the correct number of years until a future birthday", () => {
      const earthAge = new Age(56);
      expect(earthAge.getYearsUntilBirthday(61)).toEqual({"Earth Years": 5, "Mercury Years": 1.2, "Venus Years": 3.1, "Mars Years": 9.399999999999999, "Jupiter Years": 59.3});
    });
  });  
});
