{
    // Spread Operator, Rest Operator, Destructuring

    // **** Spread Operator *****
    const bros1: string[] = ['Rayma', 'Mahi', 'Simu']
    const bros2: string[] = ['Shanti', 'Juli', 'Olivia']

    // bros1.push(bros2)                     WRONG
    bros1.push(...bros2)

    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }



    // **** Rest Operator ****
    // const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    //     console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    // }            //OR
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greetFriends('Abul', 'Kabul', 'Babul')

    //
}