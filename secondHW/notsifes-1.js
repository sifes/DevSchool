function council(arr, d) {
    let sum = 0;
    let tempSum = 0;
    let space = Math.floor(arr.length / d);;

    for (let i = 0; i < space; i++) {
        tempSum = 0;
        for (let j = i; j < arr.length; j += space) {
            tempSum += arr[j];
        }
        if (tempSum > sum) {
            sum = tempSum;
        }
    }
    return sum;
}
console.log(council([1, 5, 6, 3, 4, 2], 3)); //6