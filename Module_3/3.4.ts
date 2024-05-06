{
  //type guard with instance of
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log(`I am making SOund`);
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBurking() {
      console.log(`I am barking because i am dog`);
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeawing() {
      console.log(`I am meawing because i am Cat`);
    }
  }
  //smart way te handle korar jnno amra chaile function make korte pari
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBurking();
    } else if (isCat(animal)) {
      animal.makeMeawing();
    } else {
      animal?.makeSound();
    }
  };
  const dog = new Dog("Dog vai", "dog");
  const cat = new Cat("cat vai", "cat");
  getAnimal(dog);

  //
}
