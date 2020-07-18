interface UserInterface {
    readonly name: string,
    age?: number,
    getPass(): string,
    [propName: string]: any,
}

interface UserInterfaceExtended {
    pass: string,
}

interface ArticleInterface {
    id: string
}

type UserType = {
    name: string,
    age: number,
}

const userObject: UserInterface = {
    name: 'Abs',
    age: 21,
    nick: 32,
    getPass(): string {
        return 'pass';
    },
}

class UserClass implements UserInterfaceExtended, ArticleInterface {
    id: string = '23';
    pass: string = 'pass';

    constructor(
        public name: string,
    ) {}

    getPass(): string {
        return '123';
    }
}