{
  //oop->class
  class Animal {
    // public name: string;
    // public species: string;
    //   public sound: string;
    //parameter properties
    constructor(
      public name: string, //akhane public use korar karone upore o nicher lekha gula lekha lagse na.so code clean holo
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    makeSound() {
      console.log(`this ${this.name} make sound with ${this.sound}`);
    }
  }

  const dog = new Animal("german shepard", "dog", "ghew ghew");
  const cat = new Animal("persian", "cat", "meaw meaw");
  console.log(cat, dog);
  cat.makeSound();

  ////akhane public use korar karone upore o nicher lekha gula lekha lagse na.so code clean holo
  class Animal2 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`this ${this.name} make sound with ${this.sound}`);
    }
  }
  //
}
