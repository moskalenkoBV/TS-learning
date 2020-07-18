let user = {
    name: 'Bogdan',
    age: 21,
};

let userTs: {name: string, age: number} = {
    name: 'Bogdan',
    age: 21,
}

let admin: {name: string, age: number} = {
    name: 'Admin',
    age: 22,
}

type Person = {
    name: string,
    age: number,
    getName?: () => string,
};

let adminWithType: Person = {
    name: 'admin',
    age: 21,
}