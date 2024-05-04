"use strict";
const poorUser = {
    name: "mehedi",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    },
};
console.log(poorUser);
const arrowNum = [1, 5, 8];
const newArray = arrowNum.map((ele) => ele * ele);
