const minFitness = 0;
const maxFitness = 10;

const minAge = 0;
const maxAge = 30;

const minHunger = 0;
const maxHunger = 10;

const errorMessage = "Your pet is no longer alive 😢";

class Pet {
  constructor(name) {
    this.name = name;
    this.age = minAge;
    this.hunger = minHunger;
    this.fitness = maxFitness;
  }
  growUp() {
    const birthday = 1;
    const nomNoms = 5;
    const heProtecc = 3;

    if (!this.isAlive) {
      throw new Error(errorMessage);
    }
    this.age += birthday;
    this.hunger += nomNoms;
    this.fitness -= heProtecc;
  }
  walkies() {
    const walked = 4;

    if (!this.isAlive) {
      throw new Error(errorMessage);
    } else if (this.fitness + walked <= maxFitness) {
      this.fitness += 4;
    } else {
      this.fitness = maxFitness;
    }
  }
  feed() {
    const fed = 3;

    if (!this.isAlive) {
      throw new Error(errorMessage);
    } else if (this.hunger - fed >= minHunger) {
      this.hunger -= fed;
    } else {
      this.hunger = minHunger;
    }
  }
  checkUp() {
    const bored = this.fitness <= 3;
    const hungry = this.hunger >= 5;
    const sadgePet = bored && hungry;

    if (!this.isAlive) {
      throw new Error(errorMessage);
    } else if (sadgePet) {
      return "I am hungry 🍲 and I need a walk 🐕‍🦺";
    } else if (bored) {
      return "I need a walk 🐕‍🦺";
    } else if (hungry) {
      return "I am hungry 🍲";
    } else if (!sadgePet) {
      return "I feel great! 😸";
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

class BabyPet extends Pet {
  constructor(name) {
    super(age, hunger, fitness);
    this.name = name;
  }
}

(module.exports = Pet), BabyPet;
