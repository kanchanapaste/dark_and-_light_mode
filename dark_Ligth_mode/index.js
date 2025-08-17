// let modeBtn = document.querySelector('.mode');
// let body = document.querySelector("html");
// let currMode = localStorage.getItem("mode");

// console.log(currMode, "current mode");

// if (!currMode) {
//     const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (prefersDarkMode) {
//         currMode = 'dark';
//         localStorage.setItem("mode", "dark");
//         body.setAttribute("mode","dark")
  
//     } else {
//         currMode = 'light';
//         localStorage.setItem("mode", "light");
//          body.setAttribute("mode","ligth")
//     }
// } else {
  
//     if (currMode === "dark") {
//  body.setAttribute("mode","dark")
//     } else {
//  body.setAttribute("mode","light")
//     }
// }

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//      body.setAttribute("mode","dark")
//     } else {
//         currMode = "light";
// body.setAttribute("mode","light")
//     }

    
//     localStorage.setItem("mode", currMode);
//     console.log(currMode);
// });











const modeBtn = document.querySelector('.mode');
const body = document.documentElement; // 'html'
let currMode = localStorage.getItem("mode");

// Apply the given mode to the page
function applyMode(mode) {
    body.setAttribute("mode", mode);
    localStorage.setItem("mode", mode);
    currMode = mode;
}

// Detect system preference
function getSystemPreferredMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
}

// Initialize mode on page load
function initMode() {
    if (!currMode) {
        currMode = getSystemPreferredMode();
        applyMode(currMode);
    } else {
        applyMode(currMode);
    }
}

// Toggle between light and dark mode
function toggleMode() {
    applyMode(currMode === "light" ? "dark" : "light");
}

// Event listener
modeBtn.addEventListener("click", toggleMode);

// Run initialization
initMode();

