{
  //inheritance property
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for${numOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("mr mehedi", 20, "uganda");
  student1.getSleep(20);

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will sleep for${numOfClass}`);
    }
  }

  const teacher1 = new Teacher("mr teacher", 60, "bg", "professor");
  teacher1.getSleep(20);
  console.log(teacher1);
  //
}
