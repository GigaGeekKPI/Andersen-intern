// ES5

function Validator() {
    this.validate = function(regex, str) {
        return regex.test(str);
    }
}

function EmailValidator() {
    //Определяем this в другом конструкторе-функции
    Validator.call(this);
    
    //Дополняем this своими методами
    this.isEmail = function(str) {
        return this.validate(/@/, str);
    }
}

function DomainValidator() {
    Validator.call(this);

    this.isDomain = function(str) {
        return this.validate(/.com|.ua|.ru/g, str);
    }
}

function DateValidator() {
    Validator.call(this);

    this.isDate = function(str) {
        return this.validate(/.com|.ua|.ru/g, str);
    }
}

function PhoneValidator() {
    Validator.call(this);

    this.isPhone = function(str) {
        return this.validate(/\d{3}-\d{3}-\d{4}/g, str);
    }
}

let mailValidator = new EmailValidator();
let domainValidator = new DomainValidator();
let phoneValidator = new PhoneValidator();

console.log(mailValidator.isEmail('smth@gmail.com')); 
console.log(domainValidator.isDomain('phphtml@mail')); 
console.log(phoneValidator.isPhone('097-777-7777'));