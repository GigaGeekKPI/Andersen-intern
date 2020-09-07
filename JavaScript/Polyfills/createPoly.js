Object.createPoly = function (context, descriptors = {}) {
    if (typeof context !== 'object') {
        throw new TypeError(context + ' is not an object');
    }

    function C() {}
    C.prototype = context;
    let res = new C();
    
    return Object.defineProperties(res, descriptors);
}

//Example
function Validator() {
    this.validate = function (regex, str) {
        return regex.test(str);
    }
}

function EmailValidator() {
    Validator.call(this);
    this.isEmail = function (str) {
        return this.validate(/@/, str);
    }
}
EmailValidator.prototype = Object.createPoly(Validator.prototype);
EmailValidator.prototype.constructor = EmailValidator;

let mailValidator = new EmailValidator();

console.log(mailValidator instanceof EmailValidator);
console.log(mailValidator instanceof Validator);
