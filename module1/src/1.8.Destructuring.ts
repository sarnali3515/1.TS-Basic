{
    //  Destructuring

    // Object
    const user = {
        id: 123,
        name: {
            firstName: 'Khatuna',
            middleName: 'Jannat',
            lastName: 'Sarnali'
        },
        contactNo: '123246',
        address: 'CTG'
    };

    const {
        contactNo,
        name: { middleName: midName }  // name alias
    } = user;


    // Array
    const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica']

    // const[a,b,bestFriend] = myFriends->
    const [, , bestFriend, ...rest] = myFriends










}