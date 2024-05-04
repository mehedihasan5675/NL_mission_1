//learn spread operator
const bros1: string[] = ["mamun", "bulbul", "kaisar"];
const bros2: string[] = ["mehedi", "hasan", "chanchal"];
bros1.push(...bros2);
console.log(bros1);

const mentors1 = {
  typescript: "mezba",
  redux: "mir",
  dbms: "miran",
};
const mentors2 = {
  prisma: "firoz",
  next: "tanmoy",
};
const mentorLIst = {
  ...mentors1,
  ...mentors2,
};

//rest operators
const greetFriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi ${friend}`));
};

greetFriends("abul", "kabul");

// type alias

// const student1: {
//   name: string;
//   age: number;
//   gender:string
// } = {
//   name: 'mehedi',
//   age: 52,
//   gender:'male'
// }

// const student2: {
//   name: string;
//   age: number;
//   gender: string;
// } = {
//   name: "hasan",
//   age: 30,
//   gender: "male",
// };

type Student = {
  name: string;
  age: number;
  address?: string;
  gender: string;
};

const student1: Student = {
  name: "mehedi",
  age: 52,
  gender: "male",
};

const student2: Student = {
  name: "hasan",
  age: 30,
  gender: "male",
};

// const add = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => {
  return num1 + num2;
};
