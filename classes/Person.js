//Crear una clase privada Person

class Person {
  #name;
  #age;
  #phone;

  constructor(name, age, phone) {
    this.#name = name;
    this.#age = age;
    this.#phone = phone;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  get phone() {
    return this.#phone;
  }

  set name(name) {
    this.#name = name;
  }

  set age(age) {
    this.#age = age;
  }

  set phone(phone) {
    this.#phone = phone;
  }

  greet() {
    return `Hello, my name is ${this.#name} \nI'm ${this.#age} years old and \nmy phone number is ${this.#phone}`;
  }
}

module.exports = Person;