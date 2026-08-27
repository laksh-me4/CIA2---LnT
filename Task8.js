// Task 8: Callback-based asynchronous function

function checkTimeLeftCallback(seconds, callback) {

    // Simulate an asynchronous delay
    setTimeout(() => {

        const remainingTime = seconds;

        callback(null, remainingTime);

    }, 2000);
}

// Calling the function
checkTimeLeftCallback(5, (error, remaining) => {

    if (error) {
        console.log("Error:", error);
        return;
    }

    console.log("Remaining time:", remaining, "seconds");
});