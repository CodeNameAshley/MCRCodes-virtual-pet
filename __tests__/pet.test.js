const Pet = require("../src/pet");
const BabyPet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    expect(pet.name).toEqual("Fido");
    expect(babypet.name).toEqual("Dido");
  });

  it("has an initial age of 0", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    expect(pet.age).toEqual(0);
    expect(babypet.age).toEqual(0);
  });
});

describe("growUP", () => {
  it("incriments the age by 1", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.growUp();
    babypet.growUp();

    expect(pet.age).toEqual(1);
    expect(babypet.age).toEqual(1);
  });

  it("it increases the hunger by 5", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.growUp();
    babypet.growUp();

    expect(pet.hunger).toEqual(5);
    expect(babypet.hunger).toEqual(5);
  });

  it("it decreases the fitness by 3 :(", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.growUp();
    babypet.growUp();

    expect(pet.fitness).toEqual(7);
    expect(babypet.fitness).toEqual(7);
  });

  it("throws an error if the pet is no longer alive", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.fitness = -5;
    pet.hunger = 15;
    pet.age = 35;

    babypet.fitness = 0;
    babypet.hunger = 12;
    babypet.age = 32;

    expect(() => pet.growUp()).toThrow("Your pet is no longer alive 😢");
    expect(() => babypet.growUp()).toThrow("Your pet is no longer alive 😢");
  });
});

describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.fitness = 4;
    pet.walkies();

    babypet.fitness = 3;
    babypet.walkies();

    expect(pet.fitness).toEqual(8);
    expect(babypet.fitness).toEqual(7);
  });

  it("increases fitness by to a maximum of 10", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.fitness = 8;
    pet.walkies();

    babypet.fitness = 9;
    babypet.walkies();

    expect(pet.fitness).toEqual(10);
    expect(babypet.fitness).toEqual(10);
  });

  it("throws an error if the pet is no longer alive", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.fitness = 0;
    babypet.fitness = 0;

    expect(() => pet.walkies()).toThrow("Your pet is no longer alive 😢");
    expect(() => babypet.walkies()).toThrow("Your pet is no longer alive 😢");
  });
});

describe("feed", () => {
  it("decreases hunger by 3", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.hunger = 5;
    pet.feed();

    babypet.hunger = 6;
    babypet.feed();

    expect(pet.hunger).toEqual(2);
    expect(babypet.hunger).toEqual(3);
  });

  it("decreases hunger to a minimum of 0", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.feed();
    babypet.feed();

    expect(pet.hunger).toEqual(0);
    expect(babypet.hunger).toEqual(0);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.hunger = 15;
    babypet.hunger = 20;

    expect(() => pet.feed()).toThrow("Your pet is no longer alive 😢");
    expect(() => babypet.feed()).toThrow("Your pet is no longer alive 😢");
  });
});

describe("checkUp", () => {
  it("checks if pet needs a walk, threshold is 3 and below", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.fitness = 2;
    babypet.fitness = 1;

    expect(pet.checkUp()).toEqual("I need a walk 🐕‍🦺");
    expect(babypet.checkUp()).toEqual("I need a walk 🐕‍🦺");
  });

  it("checks if pet needs food, threshold is 5 and above", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.hunger = 7;
    babypet.hunger = 8;

    expect(pet.checkUp()).toEqual("I am hungry 🍲");
    expect(babypet.checkUp()).toEqual("I am hungry 🍲");
  });

  it("checks if pet is needs a walk and needs food - both threshold must be met", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.fitness = 2;
    pet.hunger = 7;

    babypet.fitness = 1;
    babypet.hunger = 8;

    expect(pet.checkUp()).toEqual("I am hungry 🍲 and I need a walk 🐕‍🦺");
    expect(babypet.checkUp()).toEqual("I am hungry 🍲 and I need a walk 🐕‍🦺");
  });

  it("checks if fitness and hunger is above both threshold", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.fitness = 9;
    pet.hunger = 1;

    babypet.fitness = 10;
    babypet.hunger = 2;

    expect(pet.checkUp()).toEqual("I feel great! 😸");
    expect(pet.checkUp()).toEqual("I feel great! 😸");
  });
});

describe("isAlive", () => {
  it("checks if the pet is still alive based on fitness threshold", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.fitness = 0;
    babypet.fitness = -5;

    expect(pet.isAlive).toBe(false);
    expect(babypet.isAlive).toBe(false);
  });

  it("checks if the pet is still alive based on hunger threshold", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.hunger = 11;
    babypet.hunger = 15;

    expect(pet.isAlive).toBe(false);
    expect(babypet.isAlive).toBe(false);
  });

  it("checks if the pet is still alive based on the pets age", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.age = 31;
    babypet.age = 30;

    expect(pet.isAlive).toBe(false);
    expect(babypet.isAlive).toBe(false);
  });

  it("checks if the pet is still alive if all thresholds are not met", () => {
    const pet = new Pet("Fido");
    const babypet = new BabyPet("Dido");

    pet.age = 5;
    pet.hunger = 3;
    pet.fitness = 5;

    babypet.age = 2;
    babypet.hunger = 4;
    babypet.fitness = 6;

    expect(pet.isAlive).toBe(true);
    expect(babypet.isAlive).toBe(true);
  });
});

describe("super", () => {
  it("returns an object for child class", () => {
    expect(new BabyPet("Dido")).toBeInstanceOf(Object);
  });
});
