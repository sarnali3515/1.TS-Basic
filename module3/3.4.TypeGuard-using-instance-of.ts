{
    // Type Guard using instance of

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log('Making sound');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            console.log('I am barking');
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMeaw() {
            console.log('I am Mewaing');
        }
    }

    // smart way to handle, use function
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound()
        }

    }

    const dog = new Dog("Tommy", 'dog');
    const cat = new Cat("Montu", 'cat')

    getAnimal(cat)
    getAnimal(dog)





    //
}