// Active Listener

const selectElement = (s) => document.querySelector(s);

const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

const shortcut = (indexArray) => {
  indexArray.map((index) => {
    index.addEventListener("click", () => {
      selectElement(".nav-list").classList.remove("active");
    });
  });
};

shortcut([home, about, skills, projects, contact]);

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
