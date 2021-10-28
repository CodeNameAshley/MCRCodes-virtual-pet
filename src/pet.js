const maxFitness = 10;
const lowestAge = 0;
const lowestHunger = 0;

class Pet {
  constructor(name) {
    this.name = name;
    this.age = lowestAge;
    this.hunger = 0;
    this.fitness = maxFitness;
  }
  growUp() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  }
  walkies() {
    if (this.fitness + 4 <= maxFitness) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  }
  feed() {
    if (this.hunger - 3 >= lowestHunger) {
      this.hunger -= 3;
    } else {
      this.hunger = 0;
    }
  }
  checkUp() {
    const bored = this.fitness <= 3;
    const hungry = this.hunger >= 5;

    if (bored && hungry) {
      return "I am hungry and I need a walk";
    } else if (bored) {
      return "I need a walk";
    } else if (hungry) {
      return "I am hungry";
    } else if (!bored && !hungry) {
      return "I feel great!";
    }
  }
}

const fido = new Pet("Fido");
const rex = new Pet("Rex");

fido.growUp();

rex.growUp = function () {
  this.age += 5;
};

module.exports = Pet;
