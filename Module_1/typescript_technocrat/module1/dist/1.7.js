"use strict";
//learn spread operator
const bros1 = ["mamun", "bulbul", "kaisar"];
const bros2 = ["mehedi", "hasan", "chanchal"];
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
const mentorLIst = Object.assign(Object.assign({}, mentors1), mentors2);
//rest operators
const greetFriends = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriends("abul", "kabul");
const student1 = {
    name: "mehedi",
    age: 52,
    gender: "male",
};
const student2 = {
    name: "hasan",
    age: 30,
    gender: "male",
};
const add = (num1, num2) => {
    return num1 + num2;
};
