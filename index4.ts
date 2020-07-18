const createPassword = (name, age) => `${name}${age}`;

createPassword('Bogdan', 21);

const createPasswordTS = (name: string = 'Max', age: number | string = 20) => `${name}${age}`;

createPasswordTS('Name', '12');

const createPasswordTS2 = (name: string = 'Bohdan', age?: number) => `${name}${age}`; // age is optional

const createSkills = (name: string, ...rest: Array<string>): string => {
    return `${name} has following skills: ${rest.join(', ')}`
}