const express = require('express')
const app = express()
const path = require('path')
const { request } = require('http')

app.listen(3002)

app.set('view engine', 'ejs');
// app.set('views', __dirname)

app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))


const route1 = require('./routes/route1')

app.use('/', route1)