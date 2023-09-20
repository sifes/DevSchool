function sortNeg(n) {
    return Number(Array.from(n+'').sort((a, b)=>b-a).join(''))
}
console.log(sortNeg(1248914));