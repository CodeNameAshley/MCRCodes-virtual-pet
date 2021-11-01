const minFitness = 0;
const maxFitness = 10;

const minAge = 0;
const maxAge = 30;

const minHunger = 0;
const maxHunger = 10;

const birthday = 1; // adds 1 year to age
const nomNoms = 5; // adds 5 levels of hunger when pet grows up
const heProtecc = 3; // decreases fitness by 3 when pet grows up
const walked = 4; // increases fitness by 4 when walkies() is invoked
const fed = 3; // decreases hunger by 3 when feed() is invokes

const errorMessage = "Your pet is no longer alive 😢";

const children = []; // Adopted childNa array - childNa added through adoptChild()

class Pet {
  constructor(name) {
    this.name = name;
    this.age = minAge;
    this.hunger = minHunger;
    this.fitness = maxFitness;
    this.childName = children; // If player wants pet to have a child (empty at start)
  }
  growUp() {
    if (!this.isAlive) {
      throw new Error(errorMessage);
    }
    this.age += birthday;
    this.hunger += nomNoms;
    this.fitness -= heProtecc;
  }
  walkies() {
    if (!this.isAlive) {
      throw new Error(errorMessage);
    } else if (this.fitness + walked <= maxFitness) {
      this.fitness += walked;
    } else {
      this.fitness = maxFitness;
    }
  }
  feed() {
    if (!this.isAlive) {
      throw new Error(errorMessage);
    } else if (this.hunger - fed >= minHunger) {
      this.hunger -= fed;
    } else {
      this.hunger = minHunger;
    }
  }
  checkUp() {
    const bored = this.fitness <= heProtecc;
    const hungry = this.hunger >= nomNoms;
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
  adoptChild(childName) {
    return children.push(childName);
  }
}

//other way to have a child
class BabyPet extends Pet {
  constructor(name) {
    super();
    this.name = name;
  }
}

(module.exports = Pet), BabyPet;
