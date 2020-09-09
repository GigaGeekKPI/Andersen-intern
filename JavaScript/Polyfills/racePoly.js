Promise.racePoly = function (promises) {
    return new Promise(function (resolve, reject) {
        for (var i = 0; i < promises.length; i++) {
            promises[i].then(function (result) {
                resolve(result);
            }, function (err) {
                reject(err)
            });
        }
    });
};

Promise.racePoly([
    new Promise((resolve, reject) => setTimeout(() => reject('Error'), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(console.log).catch(console.log);