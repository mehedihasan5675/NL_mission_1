{
  //getter and setter

  class PersonAccount {
    name: string;
    id: number;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.name = name;
      this.id = id;
      this._balance = _balance;
    }
    get balance() {
      return this._balance;
    }
    set deposite(amount: number) {
      this._balance = this._balance + amount;
    }
  }
  const goriberBank = new PersonAccount(1, "mehedi", 2000);
  goriberBank.deposite = 125;
  console.log(goriberBank.balance);
  //
}
