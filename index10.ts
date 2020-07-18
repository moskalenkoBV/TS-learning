const getter = (data: any): any => data

const getterGeneric = <T>(data: T): T => data

getterGeneric('123').length;

// getterGeneric(123).length; // Error

getterGeneric<string>('123').length

class UserGeneric<T, K extends number> {
    constructor(
        public name: T,
        public age: K,
    ) {}

    getSecret(): number {
        return this.age**2;
    }
}

const UserFromGeneric = new UserGeneric('Bogdan', 21);