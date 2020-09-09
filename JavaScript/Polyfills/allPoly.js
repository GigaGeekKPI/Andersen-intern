Promise.all = function (promises) {

    return new Promise(function (resolve, reject) {
        let res = [];
        let counter = 0;

        promises.forEach(function (promise, index) {
            if (!(promise instanceof Promise)) {
                resolve(promise);
            }
            promise.then(function(val) {
                res[index] = val;
                counter++;

                if(counter === promises.length) {
                    resolve(res);
                }
            }, reject);
        });
    });
};

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve('21212or'), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),  // 3
]).then(console.log).catch(console.log);