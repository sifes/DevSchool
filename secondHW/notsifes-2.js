function equivalentSum(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const IndexOfElement = arr.indexOf(element);
        const leftArr = arr.slice(0, IndexOfElement);
        const rightArr = arr.slice(IndexOfElement + 1);
        if (leftArr.reduce((a, b) => a + b, 0) === rightArr.reduce((a, b) => a + b, 0)) {
            return IndexOfElement;
        }
    }
}
console.log(equivalentSum([20, 10, -80, 10, 10, 15, 35])); // 0