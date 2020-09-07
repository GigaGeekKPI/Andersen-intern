function add(num1, num2) {
    num1 = num1.toString().split('').reverse();
    num2 = num2.toString().split('').reverse();

    let res = [];

    for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
        let sum = 0;

        if (num1[i] === undefined) {
            sum = num2[i] + '';
        } else if (num2[i] === undefined) {
            sum = num1[i] + ''
        } else {
            sum = +num1[i] + +num2[i] + '';
        }

        res.unshift(sum);
    }
    return +res.join('');
}