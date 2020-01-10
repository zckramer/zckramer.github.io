const Deact = require('../../libs/deact')
const TextContent = require('./TextContent')

function Intro () {
    return Deact.create("p", {class: "intro__three-words"}, `${TextContent.IntroText01()}`)
    
}

module.exports = Intro