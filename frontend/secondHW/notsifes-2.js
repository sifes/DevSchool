function equivalentSum(arr) {
    let res = -1
    for (let index = 0; index < arr.length; index++) {
        const leftArr = arr.slice(0, index);
        const rightArr = arr.slice(index + 1);
        if (leftArr.reduce((a, b) => a + b, 0) === rightArr.reduce((a, b) => a + b, 0)) {
            res = index;
        }
    }
    return res;
}
console.log(equivalentSum([20, 10, 30, 10, 10, 15, 35])); // 0