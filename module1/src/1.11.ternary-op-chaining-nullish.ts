{
    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 15;

    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }

    // ternary
    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log(isAdult);


    // nullish coalescing operator
    // null or undefined --> decision  making

    const isAuthenticated = null;
    // const isAuthenticated = undefined;
    // const isAuthenticated = "";
    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'

    console.log(result1);
    console.log(result2);


    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: 'Sarna',
        address: {
            city: 'ctg',
            road: 'nasirabad',
            presentAddress: 'ctg town'
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No permanent address';
    console.log({ permanentAddress });




    //
}



// to run ts file ->
// npm i ts-node-dev
// npm i -g ts-node-dev

//ts-node-dev --respawn --transpile-only server.ts