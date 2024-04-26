// Initialize variables for milliseconds, seconds, minutes, and hours
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

// Get the display element where time will be shown
let displayTime = document.getElementById("displayTime");

// Variable to store the setInterval timer
let timer = null;

// Variable to store the state of the stopwatch (running or paused)
let isRunning = false;

// Function to update the stopwatch time
function stopWatch() {
    // Increment milliseconds
    milliseconds++;

    // If milliseconds reach 10, reset them and increment seconds
    if (milliseconds == 10) {
        milliseconds = 0;
        seconds++;

        // If seconds reach 60, reset them and increment minutes
        if (seconds == 60) {
            seconds = 0;
            minutes++;

            // If minutes reach 60, reset them and increment hours
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    // Format time components with leading zeros if needed
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    // Update the display with the formatted time
    displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

// Function to start or pause the stopwatch
function toggleWatch() {
    // If the stopwatch is running, pause it
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    } else { // If the stopwatch is paused, start it
        timer = setInterval(stopWatch, 100);
        isRunning = true;
    }
    console.log(isRunning)
}

// Function to reset the stopwatch
function watchReset() {
    // Clear the interval
    clearInterval(timer);
    // Reset all time variables to zero
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    // Update the display to show "00:00:00:00"
    displayTime.innerHTML = "00:00:00:00";
    // Reset the state of the stopwatch to paused
    isRunning = false;
}

// Event listener for spacebar to toggle the stopwatch
document.addEventListener("keydown", (event) => {
    if (event.key === " ") { // Start or pause stopwatch when spacebar is pressed
        toggleWatch();
    } else if (event.key === "r") { // Reset stopwatch when "r" is pressed
        watchReset();
    }
});
