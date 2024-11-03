{
    // conditional type

    type a1 = null
    type b1 = undefined

    type x = a1 extends null ? true : false      // here x is conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string
    }

    // available car / bike/ship/tractor
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false

    type HasBike = CheckVehicle<"car">          //true
    type HasTractor = CheckVehicle<"tractor">   //false


    //
}