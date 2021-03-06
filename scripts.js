// Active Listener

const selectElement = (s) => document.querySelector(s);

const github = document.getElementById("github-js");
const about = document.getElementById("about-js");
const skills = document.getElementById("skills-js");
const projects = document.getElementById("projects-js");
const contact = document.getElementById("contact-js");

const shortcut = (indexArray) => {
  indexArray.map((index) => {
    index.addEventListener("click", () => {
      selectElement(".nav-list").classList.remove("active");
    });
  });
};

shortcut([github, about, skills, projects, contact]);

selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});

// Add AOS library compatibility.

const webDev = document.getElementById("web-dev");
const webDesign = document.getElementById("web-design");
const editing = document.getElementById("editing");

const book = document.getElementById("book");
const skillImage = document.getElementById("skill-image");
const skillTextBox = document.getElementById("skill-textbox");

const specialHeader = document.getElementById("specialHeader");
const secondSpecialHeader = document.getElementById("secondSpecialHeader");
const impSentence = document.getElementById("impSentence");
const impButton = document.getElementById("impButton");

const footer = document.getElementById("footer");

const checkScreen = (imp, size) => {
  return window.matchMedia(`(${imp}-width: ${size}px)`).matches;
};

const bugFix = document.getElementById("bug-fix");

if (checkScreen("max", 420)) {
  bugFix.style["visibility"] = "hidden";
}

webDev.setAttribute("data-aos-mirror", "true");
webDesign.setAttribute("data-aos-mirror", "true");
editing.setAttribute("data-aos-mirror", "true");

if (checkScreen("max", 1100)) {
  webDev.setAttribute("data-aos", "zoom-in-right");

  webDesign.setAttribute("data-aos", "zoom-in-left");

  editing.setAttribute("data-aos", "zoom-in-right");
}

if (checkScreen("min", 1100)) {
  webDev.setAttribute("data-aos", "zoom-in-up");
  webDev.setAttribute("data-aos-offset", "-100");

  webDesign.setAttribute("data-aos", "zoom-in-up");
  webDesign.setAttribute("data-aos-offset", "-100");
  webDesign.setAttribute("data-aos-delay", "50");

  editing.setAttribute("data-aos", "zoom-in-up");
  editing.setAttribute("data-aos-offset", "-100");
  editing.setAttribute("data-aos-delay", "100");
}

if (checkScreen("min", 945) && checkScreen("max", 1700)) {
  book.style["visibility"] = "hidden";
}

skillTextBox.setAttribute("data-aos", "zoom-in-up");
skillTextBox.setAttribute("data-aos-offset", "-100");
skillTextBox.setAttribute("data-aos-mirror", "true");

skillImage.setAttribute("data-aos", "zoom-in-up");
skillImage.setAttribute("data-aos-offset", "-100");
skillImage.setAttribute("data-aos-mirror", "true");

specialHeader.setAttribute("data-aos", "zoom-in-left");
specialHeader.setAttribute("data-aos-mirror", "true");

secondSpecialHeader.setAttribute("data-aos", "zoom-in-down");
secondSpecialHeader.setAttribute("data-aos-mirror", "true");

impSentence.setAttribute("data-aos", "zoom-in-up");
impSentence.setAttribute("data-aos-mirror", "true");

impButton.setAttribute("data-aos", "zoom-out-up");
impButton.setAttribute("data-aos-mirror", "true");

footer.setAttribute("data-aos", "zoom-in-down");
footer.setAttribute("data-aos-offset", "-40");
footer.setAttribute("data-aos-mirror", "true");

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["web developer", "self-taught", "javascript addict", "linux lover"];
const typingDelay = 110;
const erasingDelay = 110;
const newTextDelay = 310;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay);
});
