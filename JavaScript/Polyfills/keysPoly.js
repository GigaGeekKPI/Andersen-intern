Object.keysPoly = function (obj) {
    // in ES5 if we use not an object as an argument,
    // we should return TypeError
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError(obj + ' is not an object');
    }

    let res = [];

    // Object.keys should return only own enumerable
    // props, not inherited
    for (let prop of Object.getOwnPropertyNames(obj)) {
        let descriptor = Object.getOwnPropertyDescriptor(obj, prop);

        if (descriptor.enumerable) {
            res.push(prop);
        }
    }

    return res;
}

//Examples
let human = {
    canWalk: true
}

let user = {
    name: 'Kirill',
    age: 20
}
Object.setPrototypeOf(user, human);

let arr = [1, 2, 3];

console.log(Object.keysPoly(arr));
console.log(Object.keysPoly(user));