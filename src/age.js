export default class Age {
  constructor(age) {
    this.age = age;
  }

  getMercuryAge() {
    return this.age * 0.24;
  }
}