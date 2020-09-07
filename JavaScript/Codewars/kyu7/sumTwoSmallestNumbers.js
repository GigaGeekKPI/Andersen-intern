function sumTwoSmallestNumbers(numbers) {
    let firstNum = Math.min(...numbers);
    numbers.splice(numbers.indexOf(firstNum), 1);
    let secondNum = Math.min(...numbers);
    return firstNum + secondNum;
}