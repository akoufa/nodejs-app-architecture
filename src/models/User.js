// @flow

/**
 * This is the app Model it is decoupled from 
 * the Entities used for the databse
 */
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

module.exports = User;
