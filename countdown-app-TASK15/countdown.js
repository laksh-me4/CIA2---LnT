// Task 15: Importing a Local Module

// Import countdownModule.js using require()
const countdownModule = require("./countdownModule");

// Get seconds from command line
const seconds = parseInt(process.argv[2]) || 5;

// Start countdown
countdownModule.startCountdown(seconds);