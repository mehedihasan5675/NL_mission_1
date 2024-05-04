{
  //interface
  //   type User1 = {
  //     name: string;
  //     age: number;
  //   };
  //   interface User2 {
  //     //interface sudhu non-premetive a use hbe r type allias duita tei use hoi
  //     name: string;
  //     age: number;
  //   }
  //   const user1: User1 = {
  //     name: "persian",
  //     age: 25,
  //   };
  //   const user2: User2 = {
  //     name: "mehedi",
  //     age: 23,
  //     };

  //intersection with interface and type allias
  type Moga1 = {
    name: string;
    age: number;
  };
  type MogaUserWithRole = Moga1 & { role: string };
  const mogaUser1: MogaUserWithRole = {
    name: "mehedi",
    age: 22,
    role: "manager",
  };
  ////
  interface Moga2 {
    name: string;
    age: number;
  }
  interface MogaUserWithRole2 extends Moga2 {
    role: string;
  }
  const mogauser2: MogaUserWithRole2 = {
    name: "mehedi",
    age: 30,
    role: "manager",
  };
  console.log(mogauser2);

  //js-->object,array-->object,function-->object
  type Roll1 = number[];
  const rollnumber1: Roll1 = [1, 2, 5];
  interface Roll2 {
    [index: number]: number;
  }
  const rollnumber2: Roll2 = [5, 6, 8];

  //function with type allias
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //function with interface
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add2: Add2 = (num1, num2) => num1 + num2;
  //
}
