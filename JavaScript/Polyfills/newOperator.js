function newOperator(constructor, ...args) {
    // Creating reference to constructor via prototype
    let instance = Object.create(constructor.prototype);
    // Extending 'this'
    constructor.apply(instance, args);
    // Returning instance
    return instance;
}

function User(name) {
    this.name = name;
    this.sayHi = function() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

let user = new User('Vasya');
let user1 = newOperator(User, 'Kirill');

console.dir(user);
console.dir(user1);

user.sayHi();
user1.sayHi();