function solve(eq) {
    let digits = eq.split(/[/*+-]/g).reverse();
    let signs = eq.match(/[/*+-]/g).reverse();
    let res = '';

    for (let i = 0; i < Math.max(digits.length, signs.length); i++) {
        if (!digits[i]) {
            res += signs[i];
        }
        else if (!signs[i]) {
            res += digits[i];
        }
        else res += digits[i] + signs[i];
    }
    return res;
}