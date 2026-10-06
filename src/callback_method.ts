function greet(name: string, callback: () => number) {

    console.log(`Hey ${name} welcome back`);

    let age: number = callback();

    console.log(`I guess your age is ${age}`)
    
}

function guessAge(): number {
    return 3;
}



function getUser(): Promise<string> {
    return new Promise((resolve, reject) => {
        const success = true;

        if (success) {
            resolve("Vysh");
        } else {
            reject("Couldn't find user");
        }
    });
}

async function main(): Promise<void> {

    try {
        const userName = await getUser();

        await greet("Vysh", guessAge);

        console.log(`User is: ${userName}`);

    } catch (error) {
        console.log(error);
    }
}

main();