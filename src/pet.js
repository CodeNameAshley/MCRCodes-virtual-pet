function Pet(name) {
  this.name = name;
  this.age = 0;
}

Pet.prototype.growUP = function () {
  this.age += 1;
};

const pet = {
  name: "Fido",
  age: 0,
};

const rex = {
  name: "Rex",
  age: 0,
};

rex.growUp = function () {
  this.age += 5;
};

module.exports = Pet;
