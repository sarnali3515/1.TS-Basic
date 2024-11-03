{
    // Utility Types


    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: number
    }
    // Pick
    type NameAge = Pick<Person, "name" | "age">

    // Omit
    type ContactInfo = Omit<Person, "name" | "age">

    // Require
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadOnly = Readonly<Person>
    const person1: PersonReadOnly = {
        name: 'Mr X',
        age: 20,
        contactNo: 333464,
    }
    // person1.name = "Mr z"       // as read only it will show error


    // Record 
    // type MyObj = {
    //     a: string,
    //     b: string
    // }
    type MyObj = Record<string, string>

    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
    };

    const EmptyObj: Record<string, unknown> = {

    }





    //
}