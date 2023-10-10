function is_prime(n) {
    if (n < 2) return false
    let isPrime = true
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!(n % i)) isPrime = false
    }
    return isPrime
}
console.log(is_prime(49));