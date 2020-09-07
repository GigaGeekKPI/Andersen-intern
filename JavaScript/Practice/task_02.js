class MyString {
    reverse(str) {
        return [...str].reverse().join('');
    }

    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        return str.split(' ').map(word => this.ucFirst(word)).join(' ');
    }
}

let str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'