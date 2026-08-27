// Task 11: Async/Await and Error Handling

function checkTimeLeftPromise(seconds) {

    return new Promise((resolve, reject) => {

        if (seconds < 0) {
            reject(new Error("Duration cannot be negative."));
            return;
        }

        setTimeout(() => {
            resolve(`Remaining time: ${seconds} seconds`);
        }, 1000);
    });
}

async function runCountdownAsync(seconds) {

    try {

        const result = await checkTimeLeftPromise(seconds);

        console.log(result);

    } catch (error) {

        console.log("Caught error:", error.message);
    }
}

// Invalid negative duration
runCountdownAsync(-5);