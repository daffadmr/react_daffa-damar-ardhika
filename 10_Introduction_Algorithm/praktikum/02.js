const lightSwitch = (number) => {
    let count = 0
    for(let i = 1; i <= number; i++){
        number % i === 0 ? count++ : count
    }
    count % 2 === 0 ? console.log("Lampu Mati") : console.log("Lampu Menyala")
}

lightSwitch(5);
lightSwitch(4);
lightSwitch(10);
lightSwitch(7);
lightSwitch(8);