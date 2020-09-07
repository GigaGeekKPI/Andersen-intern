class Singleton {
    static instance;

    constructor(name) {
        if (Singleton.instance) {
            return Singleton.instance;
        } else {
            this.name = name;

            Singleton.instance = this;
            return this;
        }
    }

    static clearInstance() {
        Singleton.instance = null;
    }
}

let me = new Singleton('Kirill');
let test = new Singleton('Anything');

console.log(me);
console.log(test);

console.log('===== Clear instance =====');
Singleton.clearInstance();

let mentor = new Singleton('Vova');
console.log(mentor);