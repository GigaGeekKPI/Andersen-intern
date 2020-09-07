function* range(to) {
    if (to === undefined) return;

    for (let i = 0; i < to; i++) {
        yield i;
    }
}

const arr = N => [...range(N)];