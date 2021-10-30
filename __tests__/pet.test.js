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

describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("fido");

    pet.fitness = 4;
    pet.walkies();

    expect(pet.fitness).toEqual(8);
  });
  it("increases fitness by to a maximum of 10", () => {
    const pet = new Pet("fido");

    pet.fitness = 8;
    pet.walkies();

    expect(pet.fitness).toEqual(10);
  });
});

describe("feed", () => {
  it("decreases hunger by 3", () => {
    const pet = new Pet("fido");

    pet.hunger = 5;
    pet.feed();

    expect(pet.hunger).toEqual(2);
  });

  it("decreases hunger to a minimum of 0", () => {
    const pet = new Pet("fido");

    pet.fitness = 1;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });
});

describe("checkUp", () => {
  it("checks if pet needs a walk, threshold is 3 and below", () => {
    const pet = new Pet("fido");

    pet.fitness = 4;
    pet.growUp();
    pet.feed();

    expect(pet.checkUp()).toEqual("I need a walk");
  });

  it("checks if pet needs food, threshold is 5 and above", () => {
    const pet = new Pet("fido");

    pet.hunger = 5;
    pet.growUp();

    expect(pet.checkUp()).toEqual("I am hungry");
  });

  it("checks if pet is needs a walk and needs food - both threshold must be met", () => {
    const pet = new Pet("fido");

    pet.fitness = 4;
    pet.hunger = 10;
    pet.growUp();

    expect(pet.checkUp()).toEqual("I am hungry and I need a walk");
  });

  it("checks if fitness and hunger is above both", () => {
    const pet = new Pet("Fido");

    pet.fitness = 10;
    pet.hunger = 0;
    pet.growUp();
    pet.feed();

    expect(pet.checkUp()).toEqual("I feel great!");
  });
});

describe("isAlive", () => {
  it("checks if the pet is still alive based on fitness threshold", () => {
    const pet = new Pet("fido");

    pet.fitness = 0;

    expect(pet.isAlive).toBe(false);
  });

  it("checks if the pet is still alive based on hunger threshold", () => {
    const pet = new Pet("fido");

    pet.hunger = 11;

    expect(pet.isAlive).toBe(false);
  });

  it("checks if the pet is still alive based on the pets age", () => {
    const pet = new Pet("fido");

    pet.age = 31;

    expect(pet.isAlive).toBe(false);
  });

  it("checks if all threshold are not met - is pet still alive?", () => {
    const pet = new Pet("fido");

    pet.age = 5;
    pet.hunger = 2;
    pet.fitness = 5;

    expect(pet.isAlive).toBe(true);
  });
});
