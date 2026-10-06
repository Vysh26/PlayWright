function greet(name: string, callback: () => number) {

    console.log(`Hey ${name} welcome back`);

    let age: number = callback();

    console.log(`I guess your age is ${age}`)
    
}

function guessAge(): number {
    return 3;
}

greet("Vysh", guessAge);