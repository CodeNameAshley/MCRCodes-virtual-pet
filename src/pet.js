class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
  }
  growUP() {
    this.age += 1;
  }
  hunger() {}
}

const fido = new Pet("Fido");
const red = new Pet("Rex");

rex.growUp = function () {
  this.age += 5;
};

module.exports = Pet;
