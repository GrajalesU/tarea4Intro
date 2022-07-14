const Person = require("./Person");

class Client extends Person {
  #credit;

  constructor(name, age, phone, credit) {
    super(name, age, phone);
    this.#credit = credit;
  }

  get credit() {
    return this.#credit;
  }

  set credit(credit) {
    this.#credit = credit;
  }

  greet() {
    let greet = super.greet();
    greet += `\nI'm a CLIENT and\nI have ${this.#credit} credit`;
    return greet;
  }
}

module.exports = Client;
