Promise.all = function (promises) {

  return new Promise(function (resolve, reject) {
    let resArray = [];
    let resolvedCounter = 0;

    function promiseValueHandler(val, index) {
      resArray[index] = val;
      resolvedCounter++;

      if (resolvedCounter === promises.length) {
        resolve(resArray);
      }
    }

    promises.forEach(function (promise, index) {

      if (!(promise instanceof Promise)) {
        Promise.resolve(promise).then(function (val) {
          promiseValueHandler(val, index);
        });
        return;
      }

      promise.then(function (val) {
        promiseValueHandler(val, index);
      }, reject);
    });
  });
};

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  'Just a primitive',
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000)),  // 3
  12
]).then(console.log).catch(console.log);