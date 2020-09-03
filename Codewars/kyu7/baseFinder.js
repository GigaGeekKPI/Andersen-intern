function baseFinder(seq) {
    //Good luck!
    let myStore = new Set();
    let count = seq.reduce((acc, num) => {
        for (let digit of String(num).split('')) {
            if (myStore.has(digit)) {
                continue;
            } else {
                myStore.add(digit);
                acc++;
            }
        }
        return acc;
    }, 0);

    return count;
}

// OR just this :)

const baseFinder2 = seq => new Set(seq.join('')).size;