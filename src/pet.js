const maxFitness = 10;
const lowestAge = 0;
const lowestHunger = 0;

class Pet {
  constructor(name) {
    this.name = name;
    this.age = lowestAge;
    this.hunger = lowestHunger;
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
}

const fido = new Pet("Fido");
const rex = new Pet("Rex");

fido.growUp();

rex.growUp = function () {
  this.age += 5;
};

module.exports = Pet;
