{
    // Generic interface

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        };
        smartWatch: T;
        bike?: X
    }
    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }
    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'Sarnali',
        computer: {
            brand: 'dcl',
            model: 'ab12',
            releaseYear: 2022,
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'xy34',
            display: 'OLED'
        }
    }
    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }
    interface YamahaBike {
        model: string;
        engineCapacity: string
    }
    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'Manaf',
        computer: {
            brand: 'HP',
            model: 'mn52',
            releaseYear: 2022,
        },
        smartWatch: {
            brand: 'apple',
            model: 'kl99',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: 'Yamaha',
            engineCapacity: '100cc'
        }
    }





    //
}