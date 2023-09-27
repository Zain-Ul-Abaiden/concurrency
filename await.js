// await

function getToastPromise() {
    return new Promise((resolve, reject) => {
        let wifeMood = 7;
        setTimeout(() => {
            if (wifeMood >= 5) {
                resolve("Toast is ready.")
            } else {
                reject("I'm in a bad mood.")
            }
        }, 2000)
    });
}

function eggFryPromise() {
    return new Promise((resolve, reject) => {
        let wifeMood = 3;
        setTimeout(() => {
            if (wifeMood >= 5) {
                resolve("Egg Fry is ready.")
            } else {
                reject("I'm in a bad mood.")
            }
        }, 2000)
    });
}

async function getResult() {
    try {
        let result = await getToastPromise();
        console.log(result);
        let eggResult = await eggFryPromise();
        console.log(eggResult);
    } catch (error) {
        console.log(error);
    }
}

getResult();