class Worker {
    constructor(name, surname, rate, days) {
        let _name = name;
        let _surname = surname;
        let _rate = rate;
        let _days = days;

        this.getName = function() {
            return _name;
        }

        this.getSurname = function() {
            return _surname;
        }

        this.getRate = function() {
            return _rate;
        }
    
        this.setRate = function(rate) {
            _rate = rate;
        }

        this.getDays = function() {
            return _days;
        }
    
        this.setDays = function(days) {
            _days = days;
        }
    }

    getSalary() {
        return this.getRate() * this.getDays();
    }
}

let workerVanya = new Worker('Иван', 'Иванов', 10, 31);

console.log(workerVanya.getName()); //выведет 'Иван'
console.log(workerVanya.getSurname()); //выведет 'Иванов'
console.log(workerVanya.getRate()); //выведет 10
console.log(workerVanya.getDays()); //выведет 31
console.log(workerVanya.getSalary()); //выведет 310 - то есть 10*31
console.log('=========== With Setters ===========');

workerVanya.setRate(20); //увеличим ставку
workerVanya.setDays(10); //уменьшим дни
console.log(workerVanya.getSalary()); //выведет 200 - то есть 20*10

let workerVasya = new Worker('Вася', 'Васильевич', 12, 38);

console.log(`Sum: ${workerVanya.getSalary() + workerVasya.getSalary()}`);