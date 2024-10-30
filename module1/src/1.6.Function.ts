{

    // Function
    // Normal Function
    // Arrow Function

    function add(num1: number, num2: number = 10): number {
        return num1 + num2;
    }

    add(3, 5);

    //Arrow
    const addArrow = (num1: number, num2: number): number => num1 + num2


    //Object ->function -> method

    const poorUser = {
        name: 'Sarna',
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is ${this.balance + balance}`;
        }
    }


    const arr: number[] = [1, 4, 20]

    const newArray: number[] = arr.map((elem: number): number => elem * elem);

}