export const isPrime = (num: number) => {
    const sqrtnum = Math.floor(Math.sqrt(num))
    let prime = num != 1

    for (var i = 2; i < sqrtnum + 1; i++) {
        if (num % i == 0) {
            prime = false
            break
        }
    }

    return prime
}

// https://stackoverflow.com/a/12287599/13844890
export const primeSince = (max: number) => {
    let sieve = [],
        i: number,
        j: number,
        primes = []

    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i)
            for (j = i << 1; j <= max; j += i) sieve[j] = true
        }
    }

    return primes
}
