// Reference Type --> Object

const user: {
    company: 'PHero';         // Literal Type
    firstName: string;
    middleName?: string;      //Optional Type
    lastName: string;
    readonly isMarried: boolean;   //readonly
} = {
    company: 'PHero',
    firstName: 'Khatuna',
    middleName: 'Jannat',
    lastName: 'Sarnali',
    isMarried: false,
};

// user.company = 'PH'         Cannot change (literal type)
// user.isMarried=true         Cannot change (readonly property)

