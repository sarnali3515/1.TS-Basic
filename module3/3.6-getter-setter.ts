{
    // Getter and Setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }
        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // getter
        get balance() {
            return this._balance
        }

        // public getBalance() {
        //     return this._balance;
        // }
    }

    const poorAccount = new BankAccount(111, 'Mr poor', 250);

    poorAccount.deposit = 50
    const myBalance = poorAccount.balance      // can use like property

    console.log(myBalance);

    //
}