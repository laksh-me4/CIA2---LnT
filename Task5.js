// Task 5: Command Line Arguments and Terminal Input

const seconds = parseInt(process.argv[2]);

if (isNaN(seconds) || seconds <= 0) {
    console.log("Please provide a valid positive number.");
    process.exit(1);
}

console.log(`Countdown started for ${seconds} seconds.`);
console.log('Type "cancel" and press Enter to stop the countdown.');

let remaining = seconds;

const timer = setInterval(() => {
    console.log(`Time remaining: ${remaining} seconds`);

    remaining--;

    if (remaining < 0) {
        clearInterval(timer);
        console.log("Countdown finished!");
        process.stdin.pause();
    }
}, 1000);

// Read input from terminal
process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
    const command = input.trim().toLowerCase();

    if (command === "cancel") {
        clearInterval(timer);
        console.log("Countdown cancelled!");
        process.stdin.pause();
    }
});

process.stdin.resume();