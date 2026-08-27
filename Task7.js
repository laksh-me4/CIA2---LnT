// Task 7: Debugging Node.js Program

let seconds = 5;

const timer = setInterval(() => {
    console.log("Time remaining:", seconds);

    seconds--;

    if (seconds === 0) {
        clearInterval(timer);
        console.log("Countdown finished!");
    }
}, 1000);

/*
Debugging:
I placed a breakpoint inside the setInterval callback
and checked the value of seconds after each iteration.
The comparison operator was incorrect.
I changed the condition so that the timer stops
when seconds reaches zero.
*/