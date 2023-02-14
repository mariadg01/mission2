// WEBPAGE CATCHPHRASE --- LETTERS APPEARS ONE BY ONE

const containerEl = document.querySelector("h1");

const message = ["Circuit Board and Design Services", "RF/Analog, Digital & Mixed-Signal Applications", "Involvement in High-Density / MultiLayer Count", "Rapid Prototyping Guaranteed", "High Yield Design"];

let messageIndex = 0;

let charIndex = 0;

updateMessage();

function updateMessage() {
  charIndex++;
  containerEl.innerHTML = `PCB ${message[messageIndex].slice(0, charIndex)}`;
  if (charIndex === message[messageIndex].length) {
    messageIndex++;
    charIndex = 0;
  }
  if (messageIndex === message.length) {
    messageIndex = 0;
  }
  setTimeout(updateMessage, 400);
}

// SIDEBAR ON-OFF (WHEN HAMBURGER BAR IS CLICKED, SIDEBAR IS ON. WHEN X ON THE SIDEBAR PANEL IS CLICKED, SIDEBAR PANEL DISAPPEARS)

const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-times");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// SEARCH INPUT TEXT BOX ON state when search icon is clicked (DEFAULT STATE IS INVISIBLE)

const inTextEl = document.querySelector(".searchText");
const searchBtnEl = document.querySelector(".search-btn");

searchBtnEl.addEventListener("click", () => {
  inTextEl.style.visibility = "visible";
});

// FORM BOX IS HIDDEN AT DEFAULT (VISIBLE WHEN CONTACT BUTTON/MAIN PAGE BUTTON ON THE SIDEBAR PANEL IS CLICKED. HIDDEN WHEN CLOSE X IS CLICKED)

const mainBtnEl = document.getElementById("mainBtn");
const contactBoxEl = document.querySelector(".contact-box");
const contactBtnEl = document.querySelector(".contactBtn");
const closeContactBoxEl = document.querySelector(".close-form");

mainBtnEl.addEventListener("click", () => {
  contactBoxEl.style.visibility = "visible";
});

contactBtnEl.addEventListener("click", () => {
  contactBoxEl.style.visibility = "visible";
});

closeContactBoxEl.addEventListener("click", () => {
  contactBoxEl.style.visibility = "hidden";
});
