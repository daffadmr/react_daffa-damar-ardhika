const isPrime = (number) => {
    let divider = 0;

    for (let i = 1; i <= number; i++) {
        number % i === 0 ? divider++ : divider
    }

    divider === 2 ? console.log("Bilangan Prima") : console.log("Bukan Bilangan Prima");
}

isPrime(1);
isPrime(5);
isPrime(43);
isPrime(27);
isPrime(3);