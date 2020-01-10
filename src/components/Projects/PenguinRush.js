const Deact = require("../../../libs/deact")
const TextContent = require("../TextContent")

function BringIt () {
    return Deact.create("article", {class: "project-description"}, `${TextContent.ProjectPenguinRush01()}`)
}

module.exports = BringIt