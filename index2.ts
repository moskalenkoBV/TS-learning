// Array Type

let list1: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

// Tuple Type

let list3: [number, string] = [1, 'string'];

let list4: [number, null];

list4 = [1, null];

// Any Type

let list5: any[] = [2, 3, 'asd'];

let list6: Array<any> = [1, 2, undefined];

let list7: [any, null] = [null, null];

let anyVar: any = 123;

// Enum type

enum Direction {
    up = 2,
    down = 4,
    left = 5,
    right // 6
}

Direction.up;
Direction.down;
Direction.left;
Direction.right;

// Type never

const error = (message: string): never => {
    throw new Error(message);
}

// Object Type

const createObject = (o: object | null): void => {
    console.log('created');
}

createObject({a: 123});

// Type

type Name = string;

let lastName: Name = '123';