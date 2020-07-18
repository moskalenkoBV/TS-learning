const baseDecorator = () => console.log('base decorator');

const logClass = (constructor: Function) => {
    console.log(constructor);
}

const logProperty = (
    target: Object,
    propertyKey: string | symbol
) => {
    console.log(propertyKey);
}

const logMethod = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) => {
    console.log(descriptor)
}

const logFabric = (value: any) => {
    return (
        target: Object,
        properyKey: string | symbol,
        descriptor: PropertyDescriptor,
    ) => {
        console.log(value);
    }
}


@logClass
class UserDecorator {
    @logProperty
    secret: number;

    constructor(
        public name: string,
        public age: number,
    ) {}

    @logFabric('fabric')
    getPass(): string {
        return 'pass';
    }
}