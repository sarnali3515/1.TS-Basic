{
    // Generic Type
    // type GenericArray<param> = Array<param>
    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] = [3, 4, 5];
    // const rollNumbers: Array<number> = [3, 4, 5];
    const rollNumbers: GenericArray<number> = [3, 4, 5];

    // const mentors: string[] = ['Mr X', 'Mr Y', 'Mr z'];
    // const mentors: Array<string> = ['Mr X', 'Mr Y', 'Mr z'];
    const mentors: GenericArray<string> = ['Mr X', 'Mr Y', 'Mr z'];

    // const boolArray: boolean[] = [true, false, true];
    // const boolArray: Array<boolean> = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    // type User ={
    //     name: string;
    //     age:number
    // }
    interface User {
        name: string;
        age: number
    }

    const user: GenericArray<User> = [
        {
            name: 'Sarna',
            age: 20,
        },
        {
            name: 'Jhankar',
            age: 35
        }
    ]


    // Generic tuple
    type GenericTuple<X, Y> = [X, Y]

    const manush: GenericTuple<string, string> = ['Mr X', 'Mr Y']

    const UserWithID: GenericTuple<number, { name: string, email: string }> = [1234, { name: 'sarna', email: 'kjsarnali@gmail.com' }]




    //
}