const Person = require("./Person");

class Worker extends Person {
  #salary;

  constructor(name, age, phone, salary) {
    super(name, age, phone);
    this.#salary = salary;
  }

  get salary() {
    return this.#salary;
  }

  set salary(salary) {
    this.#salary = salary;
  }

  greet() {
    let greet = super.greet();
    greet += `\nI'm a WORKER and\nMy salary is ${this.#salary} per month`;
    return greet;
  }
}

module.exports = Worker;
