// Task 3: Basic countdown using setInterval
let seconds = 5;

const timer = setInterval(() => {
    console.log("Time remaining:", seconds);

    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown finished!");
    }
}, 1000);