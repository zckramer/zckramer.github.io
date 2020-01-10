const Deact = require('../../libs/deact')
const Intro = require('./Intro')
const AboutMe = require('./AboutMe')
const MyProjects = require("./MyProjects")
const ContactMe = require('./ContactMe')

function NavBar () {
    return Deact.create("nav", {class: "nav-area"}, [
        NavLink("Zachary Kramer", "intro__my-name", Intro()),
        NavLink("about-me", "nav__about-me", AboutMe()),
        NavLink("my-projects", "nav__my-projects", MyProjects()),
        NavLink("contact-me", "nav__contact-me", ContactMe())
    ])
}

function NavLink (textContent, idToAdd, thingToDisplay) {
    const link = Deact.create("a" , {class: "nav-link", id: `${idToAdd}`, value: `${thingToDisplay}`}, `${textContent}`)
    link.addEventListener("click", () => {
        navigateTo(thingToDisplay);
    })
    return link;
}

function clearMainDisplay () {
    document.querySelector(".main").innerHTML = "";
}

function navigateTo (thingToDisplay) {
    clearMainDisplay();
    Deact.render(thingToDisplay, document.querySelector(".main"));
}

module.exports = NavBar