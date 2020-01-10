const Deact = require('../../libs/deact')
const TextContent = require('./TextContent')

function AboutMe () {
    return Deact.create("div", {class: "main__about-me", id: "main__about-me"}, [
        Deact.create("h2", {class: "main__about-me-title"}, "About Me"),
        Deact.create("p", {class: "main__about-me-body"}, `${TextContent.AboutMe01()}`)
    ])
}
module.exports = AboutMe