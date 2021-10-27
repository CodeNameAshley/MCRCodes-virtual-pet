const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });

  it("has an initial age of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.age).toEqual(0);
  });
});

describe("growUP", () => {
  it("incriments the age by 1", () => {
    const pet = new Pet("Fido");
    const rex = new Pet("Rex");

    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it("it increases the hunger by 5", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it("it decreases the fitness by 3 :(", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });
});
