// includes packages and variables
const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

// let every routes passing through the body-parser (included in "express")
app.use(express.urlencoded({ extended: true }))

// set template engines
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set routes
app.get('/', (req, res) => {
    res.render('index')
})

// get form info
app.post('/', (req, res) => {
    const options = req.body
    const password = generatePassword(options)
    res.render('index', { password:password, options:options })
})

// start the express server and listen for the connection
app.listen(port, () => {
    console.log(`Express app is listened on http://locolhost:${port}.`)
})