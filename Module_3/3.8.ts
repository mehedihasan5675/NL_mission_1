{
  //polymorphisom
  class Person {
    getSleep() {
      console.log(`i am sleeping for 8 hour per day`);
    }
  }
  class Student extends Person {
    getSleep() {
      console.log(`i am sleeping for 6 hour per day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`i am sleeping for 4 hour per day`);
    }
  }
  const getSleepingHour = (param: Person) => {
    param.getSleep(); //akhane ei getSleep() function e bohurupi hisebe kaj korse orthat polymorphysom
  };
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();
  getSleepingHour(person1);
  getSleepingHour(person2);
  getSleepingHour(person3);
  ////
  class Shape {
    getArea(): number {
      return 0;
    }
  }
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();

      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();

      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }
  const getAreaOfShape = (param: Shape) => {
    console.log(param.getArea());
  };
  const instanceShape = new Shape();
  const instanceCircle = new Circle(5);
  const instanceRectangle = new Rectangle(2, 2);

  getAreaOfShape(instanceShape);
  getAreaOfShape(instanceCircle);
  getAreaOfShape(instanceRectangle);
  //   console.log(instanceShape, instanceCircle, instanceRectangle);
  //
}
