const Deact = require("../../../libs/deact")
const TextContent = require("../TextContent")
const ImageSlider = require('../ImageSlider')

function BringIt () {
    const bringIt = 
        Deact.create("article", {class: "project-description"}, [
            TextContent.ProjectBringIt01(),
            Deact.create("section", {class: "project-description__images"},
                    ImageSlider(`slider-image0`, 
                                `BringItScreen01.png`, 
                                `BringItScreen02.png`, 
                                `BringItScreen03.png`)
                            )   
                        
        ])    

    return bringIt
    
}

module.exports = BringIt