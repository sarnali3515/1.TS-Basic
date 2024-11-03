{
    // OOP class
    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // Parameter properties
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German Shepard", "dog", "ghew");
    // dog.name
    const cat = new Animal("Montu", "cat", "mew")
    cat.makeSound();








    //
}