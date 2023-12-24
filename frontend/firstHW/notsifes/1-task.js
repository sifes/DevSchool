function sumOfMultiples(n) {
    let res = 0
    for (let i = 3; i < n; i++) {
        if (!(i % 3) || !(i % 5)) {
            res += i
        }
    }
    return res
}
console.log(sumOfMultiples(9));