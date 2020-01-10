const Deact = require('../libs/deact')
const App = require('./components/app')


Deact.render(App(), document.querySelector("#app"));