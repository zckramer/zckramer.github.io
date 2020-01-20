const Deact = require("../../../libs/deact")
const TextContent = require("../TextContent")
const ImageSlider = require('../ImageSlider')

function PenguinRush () {
    const penguinRush = Deact.create("article", {class: "project-description"}, [
        TextContent.ProjectPenguinRush01(),
        Deact.create("section", {class: "project-description__images"},
            ImageSlider(`slider-image0`,
                        'PenguinRush_Screenshot_01.jpg',
                        'PenguinRush_Screenshot_02.jpg',
                        'PenguinRush_Screenshot_03.jpg')
                        )
    ])

    return penguinRush
}

module.exports = PenguinRush