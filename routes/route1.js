const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
let urlencodedparser = bodyParser.urlencoded({ extended: false })
const con = require('./database_connection')

let loggeduser = ""
let loggedadmin = ""
    // ==========================session ===================================//

const mysql = require('mysql')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

let options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Pp27Bb07@',
    database: 'nutkart'
}
const sessionconnection = mysql.createConnection(options)

const sessionStore = new MySQLStore({
    expiration: 1000000,
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'sessionid',
            expires: 'expires',
            data: 'data'
        }
    }
}, sessionconnection)


router.use(
    session({
        key: 'keyin',
        secret: 'cookie_secret',
        resave: false,
        saveUninitialized: false,
        store: sessionStore, // assigning sessionStore to the session
    })
);

const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next();
    } else {
        console.log("manu");
        res.redirect('/account')
    }
}


//=============================admin=============================================//


router.get("/orders", isAuth, (req, res) => {
    res.render('orders')
})

router.get("/admin-page", isAuth, (req, res) => {
    res.render('admin-page', {
        admin_name: loggedadmin
    })
})

router.get("/admin-logout", isAuth, (req, res) => {
    req.session.isAuth = false
    res.render('account')
})

router.get("/users", isAuth, (req, res) => {
    res.render('users')
})

router.post("/admin-page", urlencodedparser, (req, res) => {
    let admin_username = req.body.admin_username
    let admin_password = req.body.admin_password

    let sql1 = `select email  from admins where ('${admin_username}' = name ) && ('${admin_password}' = password) `

    con.query(sql1, (err, result1) => {
        if (err) throw err;
        if (result1.length == 0) {
            res.render('account', {
                name: "incorrect username or password"
            })
        } else {
            req.session.isAuth = true
            loggedadmin = admin_username

            res.render('admin-page', {
                admin_name: admin_username
            })
        }
    })
})

//=========================================================================//


router.get("/", (req, res) => {
    req.session.isAuth = false
    res.render('index')
})

router.get("/home", isAuth, (req, res) => {
    res.render('index2', {
        name: loggeduser
    })
})

// router.get("/products", (req, res) => {

//     res.render('products')
// })

router.get("/products", (req, res) => {

    sql1 = "select * from products"
    con.query(sql1, (err, result) => {
            if (err) {
                throw err
            }
            console.log(result);
            res.render('products', {
                imgsrc: result[0].img_src1,
                product_name: result[0].product_name
                    // imgsrc2: result[0].img_src3
                    // imgsrc3: result[0].img_src1

            })
        })
        // res.render('products')

    // console.log(imgsrcc);
})

router.get("/products2", isAuth, (req, res) => {
    res.render('products2', {
        name: loggeduser
    })
})

router.get("/account", (req, res) => {
    req.session.isAuth = false;
    res.render('account')
})

// router.get("/account", (req, res) => {
//     req.session.isAuth = false;
//     res.render('account', {
//         message: "login to continue"
//     })
// })

router.get("/account2", isAuth, (req, res) => {
    res.render('account2', {
        name: loggeduser
    })
})

router.get("/cart/:x", (req, res) => {

    if (req.session.isAuth == true) {
        let productId = req.params.x;
        console.log(productId);

        res.render('cart', {
            imgsrc: '/images/' + productId + '.jpg'
        })
    } else {
        console.log("hello pratik");
        res.render('account')
    }

})

router.get("/productdetail/:x", (req, res) => {

    var productId = req.params.x;

    res.render('productdetail', {
        imgsrc: '/images/' + productId + '.jpg'
    })
})

router.post("/register", urlencodedparser, function(req, res) {
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    let mobile = req.body.mobile

    // let sql1 = `select username , email , password from users where ('${username}' = username) && ('${email}' = email) && ('${password}' = password) `

    let sql1 = `select email  from users where ('${email}' = email)  `
    con.query(sql1, (err, result1) => {
        if (err) throw err;
        if (result1.length == 0) {
            let sql3 = `select *  from users where ('${username}' = username)  `
            con.query(sql3, (err, result4) => {
                if (err) throw err;
                if (result4.length == 0) {
                    let sql2 = `insert into users values ('${username}','${email}','${mobile}','${password}') ;`
                    con.query(sql2, (err, result2) => {
                        if (err) throw err;
                        // logging after registering
                        res.render('index2', {
                            loggeduser: username
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
                    req.session.isAuth = true;
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