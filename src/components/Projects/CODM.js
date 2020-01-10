const Deact = require("../../../libs/deact")
const TextContent = require("../TextContent")

function CryptOfDeathMetal () {
    return Deact.create("article", {class: "project-description"}, `${TextContent.ProjectCryptOfDeathMetal01()}`)
}

module.exports = CryptOfDeathMetal