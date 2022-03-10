const express = require('express')
const con = require('./database_connection')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const { request } = require('http')
let urlencodedparser = bodyParser.urlencoded({ extended: false })
app.listen(3002)

app.set('view engine', 'ejs');
app.set('views', __dirname)

app.use('/', express.static('css'))
app.use('/', express.static('js'))

app.get("/", (req, res) => {
    res.render('index')
})

app.get("/products", (req, res) => {
    res.render('products')
})

app.get("/account", (req, res) => {
    // res.render('/account')
    res.sendFile(__dirname + "/account.html")
})

app.post("/register", urlencodedparser, function(req, res) {
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password

    // let sql1 = `select username , email , password from users where ('${username}' = username) && ('${email}' = email) && ('${password}' = password) `

    let sql1 = `select email  from users where ('${email}' = email)  `
    con.query(sql1, (err, result1) => {
        if (err) throw err;
        if (result1.length == 0) {
            let sql3 = `select *  from users where ('${username}' = username)  `
            con.query(sql3, (err, result4) => {
                if (err) throw err;
                if (result4.length == 0) {
                    let sql2 = `insert into users values ('${username}','${email}','${password}') ;`
                    con.query(sql2, (err, result2) => {
                        if (err) throw err;
                        res.render('index')
                    })
                } else {
                    res.render('account', {
                        name: "username already in use"
                    })
                }
            })


        } else {
            // res.render('account', {
            //     name: "already registered login to continue"
            // })
            res.render('account', {
                name: "already registered login to continue"
            })
        }
    })
})

app.post("/login", urlencodedparser, function(req, res) {
    let username = req.body.username
        // let email = req.body.email
    let password = req.body.password

    let sql1 = `select email  from users where ('${username}' = username) `

    con.query(sql1, (err, result1) => {
        if (err) throw err;
        if (result1.length == 0) {
            res.render('account', {
                name: "email not  registered"
            })
        } else {
            let sql2 = `select *  from users where ('${username}' = username) && ('${password}' = password) `
            con.query(sql2, (err, result2) => {
                if (result2.length == 0) {
                    res.render('account', {
                        name: "wrong password try again"
                    })
                } else {
                    res.render('index')
                }
            })

        }
    })
})