function getAverage(marks) {
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce((prev, el) => prev + el) / marks.length);
}