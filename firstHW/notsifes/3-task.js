function findNb(n) {
    let count = 0
    while (n>0) {
        count++
        n-=count**3
    }
    return !n ? count : -1
}
console.log(findNb(1071225));