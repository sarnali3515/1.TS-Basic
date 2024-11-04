{
    // Encapsulation

    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;      // cannot access from child
        protected _balance: number;       // can access from child

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        private getBalance() {
            return this._balance;
        }

        getHiddenMethod() {
            return this.getBalance()
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this.getHiddenMethod
        }
    }

    const poorAccount = new BankAccount(111, 'Mr poor', 200);
    poorAccount.addDeposit(400)
    const myBalance = poorAccount.getHiddenMethod
    console.log(myBalance);

    //
}