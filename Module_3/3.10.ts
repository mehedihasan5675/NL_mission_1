{
  //encapsulation in oop

  class BankAccount {
    public name: string;
    public readonly id: number;
    protected _balance: number; //child a access dewar jnno private er replace hbe protected
    constructor(name: string, id: number, _balance: number) {
      this.name = name;
      this.id = id;
      this._balance = _balance;
    }
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    get_Balance() {
      return this._balance;
    }
  }
  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }
  const goriberAccount = new BankAccount("mehedi", 1, 2000);
  //   goriberAccount._balance = 2;
  goriberAccount.addDeposit(20);
  const my_Balance = goriberAccount.get_Balance();
  console.log(my_Balance);
  //
}
