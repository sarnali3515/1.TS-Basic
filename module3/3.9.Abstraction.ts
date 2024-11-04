{
    // Abstraction    1. Interface  2. Abstract class

    // 1. Interface
    //idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void
    }

    //real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`I am stopping the car engine`);
        }
        move(): void {
            console.log(`I am moving the car engine`);
        }
        test() {
            console.log(`I am testing`);
        }
    }

    const toyotaCar = new Car1()
    toyotaCar.startEngine();



    // 2. Abstract Class
    //idea
    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
        test() {
            console.log(`I am testing`);
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`I am stopping the car engine`);
        }
        move(): void {
            console.log(`I am moving the car engine`);
        }
    }

    const hondaCar = new ToyotaCar()
    hondaCar.stopEngine()


    //
}