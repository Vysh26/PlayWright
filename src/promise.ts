import {greet, guessAge} from "./callback_method"

function getUser(): Promise<string> {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            resolve("vysh")
        } else {
            reject("couldn't find user");
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