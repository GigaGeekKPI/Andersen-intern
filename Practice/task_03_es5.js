// ES5

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
EmailValidator.prototype = Object.create(Validator.prototype);
EmailValidator.prototype.constructor = Object.create(Validator.prototype);


function DomainValidator() {
    Validator.call(this);

    this.isDomain = function (str) {
        return this.validate(/.com|.ua|.ru/g, str);
    }
}
DomainValidator.prototype = Object.create(Validator.prototype);
DomainValidator.prototype.constructor = Object.create(Validator.prototype);

function DateValidator() {
    Validator.call(this);

    this.isDate = function (str) {
        return this.validate(/.com|.ua|.ru/g, str);
    }
}
DateValidator.prototype = Object.create(Validator.prototype);
DateValidator.prototype.constructor = Object.create(Validator.prototype);

function PhoneValidator() {
    Validator.call(this);

    this.isPhone = function (str) {
        return this.validate(/\d{3}-\d{3}-\d{4}/g, str);
    }
}
PhoneValidator.prototype = Object.create(Validator.prototype);
PhoneValidator.prototype.constructor = Object.create(Validator.prototype);

var mailValidator = new EmailValidator();
var domainValidator = new DomainValidator();
var phoneValidator = new PhoneValidator();

console.dir(mailValidator.isEmail('smth@gmail.com'));
console.dir(domainValidator.isDomain('phphtml@mail'));
console.dir(phoneValidator.isPhone('097-777-7777'));

// Проверяем наследственность
console.log(mailValidator instanceof EmailValidator);
console.log(mailValidator instanceof Validator);