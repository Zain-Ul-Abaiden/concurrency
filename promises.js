// Promises

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

getToastPromise()
    .then((arg) => {
        console.log(arg);
        return eggFryPromise();
    })
    .then((arg1) => {
        console.log(arg1);
    })
    .catch((error) => {
        console.log(error);
    })