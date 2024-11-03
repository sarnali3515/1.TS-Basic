{
    // Generic constraints with keyof operator
    type vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship"  // manually
    const person: Owner = "bike"

    type Owner2 = keyof vehicle
    const person1: Owner2 = "bike"


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: 'Sarnali',
        age: 23,
        address: 'ctg'
    }
    const car = {
        model: "Toyota",
        year: 2000
    }

    const result = getPropertyValue(user, 'name')
    const result2 = getPropertyValue(car, 'model')










    //
}