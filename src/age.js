export default class Age {
  constructor(age) {
    this.age = age;
  }

  getMercuryAge() {
    return this.age * 0.24;
  }

  getVenusAge() {
    return this.age * 0.62;
  }

  getMarsAge() {
    return this.age * 1.88;
  }

  getJupiterAge() {
    return this.age * 11.86;
  }

  getYearsSinceBirthday(pastBirthday) {
    const ageSincePastBday = this.age - pastBirthday;
    const mercuryAge = ageSincePastBday * 0.24;
    const venusAge = ageSincePastBday * 0.62;
    const marsAge = ageSincePastBday * 1.88;
    const jupiterAge = ageSincePastBday * 11.86;

    return { "Earth Years": ageSincePastBday, "Mercury Years": mercuryAge, "Venus Years": venusAge, "Mars Years": marsAge, "Jupiter Years": jupiterAge };
  }
}