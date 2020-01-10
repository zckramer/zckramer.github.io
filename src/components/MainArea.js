const Deact = require('../../libs/deact')
const Intro = require("./Intro")

function MainArea () {
    return Deact.create("main", {class: "main"}, Intro())
}

module.exports = MainArea