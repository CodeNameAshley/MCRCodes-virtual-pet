const minFitness = 0;
const maxFitness = 10;

const minAge = 0;
const maxAge = 30;

const minHunger = 0;
const maxHunger = 10;

class Pet {
  constructor(name) {
    this.name = name;
    this.age = minAge;
    this.hunger = minHunger;
    this.fitness = maxFitness;
  }
  growUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive 😢");
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  }
  walkies() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive 😢");
    } else if (this.fitness + 4 <= maxFitness) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  }
  feed() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive 😢");
    } else if (this.hunger - 3 >= minHunger) {
      this.hunger -= 3;
    } else {
      this.hunger = 0;
    }
  }
  checkUp() {
    const bored = this.fitness <= 3;
    const hungry = this.hunger >= 5;

    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive 😢");
    } else if (bored && hungry) {
      return "I am hungry and I need a walk";
    } else if (bored) {
      return "I need a walk";
    } else if (hungry) {
      return "I am hungry";
    } else if (!bored && !hungry) {
      return "I feel great!";
    }
  }
  get isAlive() {
    if (
      this.age >= maxAge ||
      this.hunger >= maxHunger ||
      this.fitness <= minFitness
    ) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Pet;
