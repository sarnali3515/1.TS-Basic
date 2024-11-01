{
    // interface

    type User1 = {
        name: string;
        age: number;
    };
    // const user1: User1 = {
    //     name: 'sarna',
    //     age: 20,
    // }

    // type rollNumber = number      //But in interface, cannot do this

    interface User2 {
        name: string;
        age: number
    }
    // const user1: User2 = {
    //     name: 'sarna',
    //     age: 20,
    // }

    type UserWithRole1 = User1 & {
        role: string
    }
    // const user1: UserWithRole1 = {
    //     name: 'sarna',
    //     age: 20,
    //     role: 'developer'
    // }

    interface UserWithRole2 extends User2 {
        role: string;
    }
    const user1: UserWithRole2 = {
        name: 'sarna',
        age: 20,
        role: 'developer'
    }

    interface UserWithRole2 extends User1 {
        role: string;
    }



    // js --> object, array -> object, function -> object

    type Roll1 = number[]

    // const rollNumber1: Roll1 = [1, 2, 3]

    interface Roll2 {
        [index: number]: number
    }
    const rollNumber1: Roll2 = [1, 2, 3]



    type Add = (num1: number, num2: number) => number;

    // const add: Add = (num1, num2) => num1 + num2;

    interface Add2 {
        (num1: number, num2: number): number
    }
    const add: Add2 = (num1, num2) => num1 + num2;



    // use strategy
    // for array, function -> use type
    // for object -> use type or interface


    //
}