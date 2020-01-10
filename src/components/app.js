const Deact = require('../../libs/deact')
const MainArea = require('./MainArea')
const NavBar = require('./NavBar')
const Intro = require('./Intro')

function App () {
    let app = Deact.create("div", {class: "wrapper"}, [
        NavBar(),
        MainArea()        
    ]) 
    return app;
}

module.exports = App