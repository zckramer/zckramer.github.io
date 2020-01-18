const Deact = require('../../libs/deact')
const BaseURL = "https://zckramer.github.io/src/images/"


function ImageSlider (idName, img1, img2, img3, img4) {
    const slider = Deact.create("div", {class: "slider-container"}, [
        Deact.create("span", {id: `${idName}1`}, ""),
        Deact.create("span", {id: `${idName}2`}, ""), 
        Deact.create("span", {id: `${idName}3`}, ""),
        Deact.create("span", {id: `${idName}4`}, ""),

        Deact.create("div", {class: "image-container"}, [
            Deact.create("img", {class: "slider-image", src: BaseURL + img1}, ""),
            Deact.create("img", {class: "slider-image", src: BaseURL + img2}, ""),
            Deact.create("img", {class: "slider-image", src: BaseURL + img3}, ""),
            Deact.create("img", {class: "slider-image", src: BaseURL + img4}, "")
            
        ]),

        Deact.create("div", {class: "slider-button-container"}, sliderButtons(`#${idName}1`, `#${idName}2`, `#${idName}3`, `#${idName}4`))

    ])
        
    return slider
        
}

function sliderButtons (targetId1, targetId2, targetId3, targetId4) {
    const buttons = [
        Deact.create("a", {class: "slider-button", href: `${targetId1}`}, ""),
        Deact.create("a", {class: "slider-button", href: `${targetId2}`}, ""),
        Deact.create("a", {class: "slider-button", href: `${targetId3}`}, ""),
        Deact.create("a", {class: "slider-button", href: `${targetId4}`}, "")

    ]
    return buttons
}

// function checkFolderForFiles (folderPath) {

    // let returnedFiles

    // fs.readdir(folderPath, function (err, files){
    //     if(err){
    //         console.error("Could not list the directory.", err)
    //         // process.exit(1)
    //     }
    //     files.map(function (file) {
    //         returnedFiles.push(file)
    //     })
    // }) 
    
    // return returnedFiles
    
// }

module.exports = ImageSlider