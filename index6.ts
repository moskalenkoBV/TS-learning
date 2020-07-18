class User {
    // public
    // private (only inside access)
    // protected (only children)
    // readonly
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class User2 {
    constructor(
        public name: string,
        protected age: number,
    ) {}
}