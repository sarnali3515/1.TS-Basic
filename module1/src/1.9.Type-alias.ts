{
    //
    //Type Alias

    // Object
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: 'Sarna',
        age: 24,
        gender: 'female',
        contactNo: '0123484676',
        address: 'ctg'
    };

    const student2: Student = {
        name: 'Olivia',
        age: 26,
        gender: 'female',
        address: 'Dhk'
    }

    // 
    type UserName = string;
    type IsAdmin = boolean

    const userName: UserName = 'Sarna'
    const isAdmin: IsAdmin = true

    // Function
    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;





    //
}