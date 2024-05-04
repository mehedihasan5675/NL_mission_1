const poorUser = {
  name: "mehedi",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};

console.log(poorUser);

const arrowNum: number[] = [1, 5, 8];
const newArray: number[] = arrowNum.map((ele: number): number => ele * ele);
