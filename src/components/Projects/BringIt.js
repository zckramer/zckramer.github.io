const Deact = require("../../../libs/deact")
const TextContent = require("../TextContent")
const ImageSlider = require('../ImageSlider')
const BaseURL = require('../../index')
const imageURL = BaseURL() + "src/images/"

function BringIt () {
    const bringIt = 
        Deact.create("article", {class: "project-description"}, [
            TextContent.ProjectBringIt01(),
            Deact.create("section", {class: "project-description__images"},
                    ImageSlider(imageURL + `slider-image0`, 
                                imageURL + `BringItScreen01.png`, 
                                imageURL + `BringItScreen02.png`, 
                                imageURL + `BringItScreen03.png`)
                            )   
                        
        ])    

    return bringIt
    
}

// ImageSlider (idName, img1, img2, img3)
function BringItScreenshotsArray () {
    const screens = [
        Deact.create("img", {class: "project-description__image", id: "project-description__image01", src: "../src/images/BringItScreen01.png"}, ""),
        Deact.create("img", {class: "project-description__image", id: "project-description__image02", src: "../src/images/BringItScreen02.png"}, ""),
        Deact.create("img", {class: "project-description__image", id: "project-description__image03", src: "../src/images/BringItScreen03.png"}, ""),
    ]
    return screens
}




module.exports = BringIt