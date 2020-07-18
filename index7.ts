class User3 {
    private age: number;
    static secretKey = 123;

    constructor(
        public name: string,
        public nick: string,
    ) {}
}

User3.secretKey;

class UserBogdan extends User3 {
    name: string = 'Bogdan'

    constructor(nick: string) {
        super(name, nick);
    }
}

const userBogdan = new UserBogdan('Boss');

abstract class UserAbstract {
    constructor (
        public name: string,
        public age: number,
    ) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string
}

class UserFromAbstract extends UserAbstract {
    getPass(): string {
        return 'asd';
    }
}

const userFromAbstruct = new UserFromAbstract('Bogdan', 21);


