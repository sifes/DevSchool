function highAndLow(nums) {
    nums = nums.split(' ')
    const lowest = nums.reduce((prev,curr)=>prev<curr?prev:curr)
    const biggest = nums.reduce((prev,curr)=>prev>curr?prev:curr)
    return `${biggest} ${lowest}`
}
console.log(highAndLow("1 2 3 4 5"));