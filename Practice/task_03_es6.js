class Validator {
    validate(regexp, str) {
        return regexp.test(str);
    }
}

class EmailValidator extends Validator {
    isEmail(str) {
        return super.validate(/@/, str)
    }
}

class DomainValidator extends Validator {
    isDomain(str) {
        return super.validate(/.com|.ua|.ru/g, str);
    }
}

class DateValidator extends Validator {
    isDate(str) {
        return super.validate(/.com|.ua|.ru/g, str);
    }
}

class PhoneValidator extends Validator {
    isPhone(str) {
        return super.validate(/\d{3}-\d{3}-\d{4}/g, str);
    }
}

let mailValidator = new EmailValidator();
let domainValidator = new DomainValidator();
let phoneValidator = new PhoneValidator();

console.log(mailValidator.isEmail('smth@gmail.com'));
console.log(domainValidator.isDomain('phphtml@mail'));
console.log(phoneValidator.isPhone('097-777-7777'));