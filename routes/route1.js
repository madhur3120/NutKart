const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
let urlencodedparser = bodyParser.urlencoded({ extended: false })
const con = require('./database_connection')

let loggeduser = ""

router.get("/", (req, res) => {
    res.render('index')
})

router.get("/home", (req, res) => {
    res.render('index2', {
        name: loggeduser
    })
})

router.get("/products", (req, res) => {
    res.render('products')
})

router.get("/products2", (req, res) => {
    res.render('products2', {
        name: loggeduser
    })
})

router.get("/account", (req, res) => {
    res.render('account')
})

router.get("/account2", (req, res) => {
    res.render('account2', {
        name: loggeduser
    })
})


router.post("/register", urlencodedparser, function(req, res) {
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
                        // logging after registering
                        loggeduser: username
                        res.render('index2', {
                            name: loggeduser
                        })
                    })
                } else {
                    res.render('account', {
                        name: "username already in use"
                    })
                }
            })


        } else {
            res.render('account', {
                name: "already registered login to continue"
            })
        }
    })
})

router.post("/login", urlencodedparser, function(req, res) {
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
                    // success login
                    loggeduser = username
                    res.render('index2', {
                        name: username
                    })
                }
            })

        }
    })
})

module.exports = router