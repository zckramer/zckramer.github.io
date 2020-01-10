const Deact = require('../../libs/deact')
const BringIt = require('./Projects/BringIt')
const ProjectArea = require('./ProjectArea')
const Crypt = require('./Projects/CODM')
const PenguinRush = require('./Projects/PenguinRush')

function MyProjects() {
    const myProjects =   
        Deact.create("div", {class: "my-projects", id: "main__my-projects"}, [
            Deact.create("h2", {class: "my-projects__title"}, "Some of the things I've made..."),
            Deact.create("ul", {class: "my-projects__list"}, [
                Deact.create("li", {class: "my-projects__list-item"}, ProjectLink("Bring It!", "bring-it", BringIt())),
                Deact.create("li", {class: "my-projects__list-item"}, ProjectLink("Crypt Of Death Metal", "crypt-of-death-metal", Crypt())),
                Deact.create("li", {class: "my-projects__list-item"}, ProjectLink("Penguin Rush", "penguin-rush", PenguinRush()))
            ]),
            Deact.create("div", {class: "my-projects__project-wrapper"}, ProjectArea(""))
        ])

    return myProjects
}

function clearProjectArea () {
    if (document.querySelector(".my-projects__screenshots") != null){
        document.querySelector(".my-projects__screenshots").innerHTML = "";
    }
    if (document.querySelector(".my-projects__description") != null){
        document.querySelector(".my-projects__description").innerHTML = "";
    }
    if (document.querySelector('.my-projects__project-wrapper') != null){
        document.querySelector(".my-projects__project-wrapper").innerHTML = "";
    }
}

function displayProject (thingToDisplay) {
    clearProjectArea();
    Deact.render(thingToDisplay, document.querySelector(".my-projects__project-wrapper"));
}

function ProjectLink (textContent, idToAdd, thingToDisplay) {
    const link = Deact.create("a" , {class: "nav-link", id: `${idToAdd}`, value: `${thingToDisplay}`}, `${textContent}`)
    link.addEventListener("click", () => {
        displayProject(thingToDisplay);
    })
    return link;
}

module.exports = MyProjects