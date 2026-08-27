// Task 12: Call Stack and Callback Queue

function checkTimeLeftPromise(seconds) {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(`Time remaining: ${seconds} seconds`);
        }, 1000);

    });
}

async function runCountdownAsync(seconds) {

    try {

        console.log("1. Async function started");

        const result = await checkTimeLeftPromise(seconds);

        console.log("3. Promise resolved:", result);

    } catch (error) {

        console.log("Error:", error.message);

    }
}

runCountdownAsync(5);

function recursiveCountdown(n) {

    console.log(n);

    if (n === 0) {
        return;
    }

    recursiveCountdown(n - 1);
}
