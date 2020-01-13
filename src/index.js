const Deact = require('../libs/deact')
const App = require('./components/app')

const BaseURL = "https://zckramer.github.io/"
module.exports = BaseURL

Deact.render(App(), document.querySelector("#app"));