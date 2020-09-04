Function.prototype.bindPoly = function (context, ...args) {
    let func = this;
    return function (...rest) {
        return func.call(context, ...args, ...rest);
    }
}


//Example
function sayHi(firstArg, secondArg) {
    console.log(firstArg, this.name, secondArg);
}

let user = {
    name: 'Context'
}

let userSayHi = sayHi.bindPoly(user, 'Bound arg \t');
userSayHi('\tRest arg');