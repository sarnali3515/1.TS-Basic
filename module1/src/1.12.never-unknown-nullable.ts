{
    //
    //nullable types
    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching');
        } else {
            console.log('there is nothing to search');
        }
    }
    // searchName('sarna')
    searchName(null)


    //unknown typeof

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const covertedSpeed = (value * 1000) / 3600
            console.log(`The speed is ${covertedSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(" ");
            const covertedSpeed = (parseFloat(result) * 1000) / 3600
            console.log(`The speed is ${covertedSpeed} ms^-1`)
        }
        else {
            console.log("wrong Input");
        }
    }
    getSpeedInMeterPerSecond(`1000 kmh^-1`);


    //never type

    const throwError = (msg: string): never => {
        throw new Error(msg);
    }

    throwError('error occur')



}