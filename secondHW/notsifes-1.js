function council(arr, d) {
    let result = -100000;
    let k = Math.floor(arr.length / d)
    for (let i = 0; i < k; i++) {
        result = Math.max(result, [...arr].filter((item, index) => index % k === i).reduce((acc, item) => acc + item, 0))
    }
    return result;
}
console.log(council([1, 5, 6, 3, 4, 2], 3), 'result'); //6