// Task 15: Local Node.js Module

function startCountdown(seconds) {

    if (seconds <= 0) {
        console.log("Please provide a positive duration.");
        return;
    }

    console.log(`Countdown started for ${seconds} seconds.`);

    let remaining = seconds;

    const timer = setInterval(() => {

        console.log("Time remaining:", remaining);

        remaining--;

        if (remaining === 0) {

            clearInterval(timer);

            console.log("Countdown finished!");
        }

    }, 1000);
}

// Export the function
module.exports = {
    startCountdown
};