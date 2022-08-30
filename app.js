// includes packages and variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// set template engines
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// set routes
app.get('/', (req, res) => {
    res.render('index')
})

// start the express server and listen for the connection
app.listen(port, () => {
    console.log(`Express app is listened on http://locolhost:${port}.`)
})