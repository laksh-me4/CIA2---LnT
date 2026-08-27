// Task 10: Promise-based countdown function

function checkTimeLeftPromise(seconds) {

    return new Promise((resolve, reject) => {

        // Reject invalid duration
        if (seconds < 0) {
            reject(new Error("Duration cannot be negative."));
            return;
        }

        // Simulate asynchronous operation
        setTimeout(() => {
            resolve(`Remaining time: ${seconds} seconds`);
        }, 2000);
    });
}

// Promise chaining
checkTimeLeftPromise(5)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });