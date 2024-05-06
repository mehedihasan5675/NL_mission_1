"use strict";
{
    //oop->class
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`this ${this.name} make sound with ${this.sound}`);
        }
    }
    const dog = new Animal("german shepard", "dog", "ghew ghew");
    const cat = new Animal("persian", "cat", "meaw meaw");
    console.log(cat, dog);
    //
}
