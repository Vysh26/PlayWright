
export function greet(name: string, callback: (candidate_name: string) => number) {

    console.log(`Hey ${name} welcome back`);

    console.log(`Let me gues your age`);

    let age: number = callback(name);

    console.log(`I guess ${name} age is ${age}`)

}

export function guessAge(candidate_name: string) {

    let age: number =  Math.floor(Math.random() * 10);
    
    return age;

}




