const express = require('express')
const app = express()
const path = require('path')
const { request } = require('http')

app.listen(3002)

app.set('view engine', 'ejs');

// no need of this because it automatically looks for views folder in current directory for ejs files
// app.set('views', path.join(__dirname, 'views'))

// used for all static things like css , images , client side javascript
app.use(express.static(path.join(__dirname, 'public')))


const route1 = require('./routes/route1')

app.use('/', route1)