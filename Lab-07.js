/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Week 7 Lab: Objects, Timers, and DOM
*/

const baseSelector = "#listID li";

function getRandomNumber(min, max) {
    // Generate a random integer between min (included) and max (excluded)
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
}
function changeBold() {
    // Change which list element is bold

    // Get li nodeList using querySelectorAll() and CSS
    const liNodeList = document.querySelectorAll (baseSelector);

    // Find current bolded li, use -1 to indicate none set
    // Reset current to normal
    let currentBoldLI = -1;
    for (let li = 0; li < liNodeList.length; li++) {
        // Use a conditional to test if fontWeight
        // style is "bold" using strict equivalence
        if (liNodeList[li].style.fontWeight === 'bold') {
            currentBoldLI = li;
            // Set fontWeight to "normal" for found bolded node
            liNodeList[li].style.fontWeight = 'normal';
        }
    }

    // Set new bolded element by updating setBold variable with
    // the next NodeList item index to set
    let setBold = 0;
    if (currentBoldLI >= 0) {
        // Increment setBold only if will not exceed items

        if (setBold < liNodeList.length - 1) {
            setBold = currentBoldLI + 1;
        }
    }
    // Use setBold as index into NodeList, and set fontWeight to "bold"
    liNodeList[setBold].style.fontWeight = 'bold';
}
function changeWord() {

    // Generate a random list number for querySelector()-appropriate updates
    // where the range is 1 to length + 1
    const liNodeList = document.querySelectorAll(baseSelector);
    // Get random number between 1 and NodeList.length + 1
    const randomLI = getRandomNumber(1, (liNodeList.length + 1));

    // Generate a random number between 1 and 10,000
    const randomNumber = getRandomNumber(1, 10000);

    const nthSelector = `${baseSelector}:nth-child(${randomLI})`;
    // Use nthSelector and textContent to set a random number
    document.querySelector(nthSelector).textContent = `Random ${randomNumber}`;
}
function changeColor() {
    // Generate random hexadecimal RGB colors
    const red = getRandomNumber(0,255).toString(16);
    const green = getRandomNumber(0,255).toString(16);
    const blue = getRandomNumber(0,255).toString(16);

    // Generate a random list number appropriate for NodeList access
    // where index is 0 to length
    const liNodeList = document.querySelectorAll(baseSelector);
    const randomLI = getRandomNumber(0, liNodeList.length);

    // Use randomLI to select a random NodeList item to set the 
    // random color
    liNodeList[randomLI].style.color = `#${red}${green}${blue}`;
}

// Setup timers for callback functions
// Assign callback to changeBold every two seconds
const intervalMoveBold = setInterval(changeBold, 2000);

// Assign callback to changeWord every five seconds
const intervalChangeWord = setInterval(changeWord, 5000);

// Assign callback to changeColor every three seconds
const intervalChangeColor = setInterval(changeColor, 3000);