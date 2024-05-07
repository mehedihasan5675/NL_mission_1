{
  //abstraction:1.interface 2.abstract
  //idea
  interface Vehicle1 {
    startEngine(): void;
    endEngine(): void;
    move(): void;
  }
  //real implement
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }
    endEngine(): void {
      console.log(`i am ending the car engine`);
    }
    move(): void {
      console.log(`i am moving the car`);
    }
    test() {
      console.log(`i am just testing`);
    }
  }
  const toyotaCar = new Car();
  toyotaCar.startEngine();

  //abstract class use kore abstraction toiri korte pari
  abstract class Car2 {
    abstract startEngine(): void;
    abstract endEngine(): void;
    abstract move(): void;
    abstract test(): void;
  }
  class toyotaCar2 extends Car2 {
    startEngine(): void {
      console.log(`i am starting`);
    }
    endEngine(): void {
      console.log(`i am ending`);
    }
    move(): void {
      console.log(`i am moving`);
    }
    test(): void {
      console.log("i am test");
    }
  }
  // const hondacar = new Car2();
  // hondacar.move();

  //
}
