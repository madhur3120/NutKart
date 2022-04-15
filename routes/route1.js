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
        // if not authorize we are redirecting it to the login and register
        res.redirect('/account')
    }
}


//=============================admin================================//


router.get("/add-admin", isAuth, (req, res) => {
    res.render('add-admin')
})

router.get("/orders", isAuth, (req, res) => {
    let sql = `select * from orders ;`
    con.query(sql, (err, result) => {
        if (err) throw err;
        let ordersdata = result
        res.render('orders', {
            ordersdata: ordersdata
        })
    })
})

router.get("/admin-page", isAuth, (req, res) => {
    res.render('admin-page', {
        admin_name: loggedadmin
    })
})

router.get("/admin-logout", isAuth, (req, res) => {
    let sql = `truncate current_users ;`
    con.query(sql, (err, res) => {
        if (err) throw err;
    })
    req.session.isAuth = false
    res.render('account')
})

router.get("/users", isAuth, (req, res) => {
    let sql = `select * from users ;`
    con.query(sql, (err, result) => {
        if (err) throw err;
        let usersdata = result
        res.render('users', {
            usersdata: usersdata
        })
    })
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



router.post("/register-admin", urlencodedparser, function(req, res) {
    let username = req.body.admin_username
    let email = req.body.admin_email
    let password = req.body.admin_password
    let mobile = req.body.admin_mobile

    let sql1 = `select email  from admins where ('${email}' = email) ;`
    con.query(sql1, (err, result1) => {
        if (err) throw err;
        if (result1.length == 0) {
            let sql3 = `select *  from admins where ('${username}' = name) ;`
            con.query(sql3, (err, result4) => {
                if (err) throw err;
                if (result4.length == 0) {
                    let sql2 = `insert into admins values ('${username}','${mobile}','${email}','${password}') ;`
                    con.query(sql2, (err, result2) => {
                        if (err) throw err;

                        res.render('admin-page', {
                            admin_name: loggedadmin
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



//=========================================================================//


router.get("/", (req, res) => {
    req.session.isAuth = false
    res.render('index')
})



router.get("/contact-page", (req, res) => {
    res.render('contact-page')
})

router.get("/blog1", (req, res) => {
    res.render('blog1')
})

router.get("/blog2", (req, res) => {
    res.render('blog2')
})
router.get("/blog3", (req, res) => {
    res.render('blog3')
})
router.get("/blog4", (req, res) => {
    res.render('blog4')
})
router.get("/blog5", (req, res) => {
    res.render('blog5')
})
router.get("/blog6", (req, res) => {
    res.render('blog6')
})
router.get("/blog7", (req, res) => {
    res.render('blog7')
})
router.get("/blog8", (req, res) => {
    res.render('blog8')
})
router.get("/blog9", (req, res) => {
    res.render('blog9')
})

router.get("/blog-page", (req, res) => {
    res.render('blogsnut')
})


router.get("/about-page", (req, res) => {
    res.render('about-page')
})

router.get("/home", isAuth, (req, res) => {
    res.render('index2', {
        name: loggeduser
    })
})

// router.get("/products", (req, res) => {

//     res.render('products')
// })

router.get("/low-to-high", (req, res) => {

    sql1 = "select * from products ORDER BY price"
    con.query(sql1, (err, result) => {
            if (err) {
                throw err
            }
            // console.log(result);
            let products = result
            res.render('products', {

                imgsrc: products,
                products: products
                    // product_name: result[0].product_name,
                    // imgsrc1: result[1].img_src1,
                    // product_name1: result[1].product_name,
                    // imgsrc2: result[2].img_src1,
                    // product_name2: result[2].product_name,
                    // imgsrc3: result[3].img_src1,
                    // product_name3: result[3].product_name
                    // imgsrc2: result[0].img_src3
                    // imgsrc3: result[0].img_src1
            })
        })
        // res.render('products')

    // console.log(imgsrcc);
})



router.get("/high-to-low", (req, res) => {

    sql1 = "select * from products ORDER BY price DESC"
    con.query(sql1, (err, result) => {
            if (err) {
                throw err
            }
            // console.log(result);
            let products = result
            res.render('products', {

                imgsrc: products,
                products: products
                    // product_name: result[0].product_name,
                    // imgsrc1: result[1].img_src1,
                    // product_name1: result[1].product_name,
                    // imgsrc2: result[2].img_src1,
                    // product_name2: result[2].product_name,
                    // imgsrc3: result[3].img_src1,
                    // product_name3: result[3].product_name
                    // imgsrc2: result[0].img_src3
                    // imgsrc3: result[0].img_src1
            })
        })
        // res.render('products')

    // console.log(imgsrcc);
})


router.get("/products", (req, res) => {

    sql1 = "select * from products ORDER BY price DESC"
    con.query(sql1, (err, result) => {
        if (err) {
            throw err
        }
        // console.log(result);
        let products = result
        res.render('products', {

            imgsrc: products,
            products: products
                // product_name: result[0].product_name,
                // imgsrc1: result[1].img_src1,
                // product_name1: result[1].product_name,
                // imgsrc2: result[2].img_src1,
                // product_name2: result[2].product_name,
                // imgsrc3: result[3].img_src1,
                // product_name3: result[3].product_name
                // imgsrc2: result[0].img_src3
                // imgsrc3: result[0].img_src1

        })
    })
})

router.get("/add-to-cart/:x", (req, res) => {

    let sqll = `select * from current_users;`
    con.query(sqll, (err, resultl) => {
        if (err) throw err;
        loggeduser = resultl[0].current_user

        let username = loggeduser
        let product_name = req.params.x
        let img_src1 = "images/" + product_name + ".jpg"
        let product_price = 0

        let sql1 = `select * from products where '${product_name}' = product_name ;`
        con.query(sql1, (err, result) => {
            console.log(result);
            if (err) throw err;
            product_price = result[0].price
            console.log(product_price);

            let sql2 = `insert into  cart values ('${username}','${product_name}','${product_price}','${img_src1}')`
            con.query(sql2, (err, result2) => {
                if (err) throw err;
            })
        })

        // console.log(product_price);

        let productId = req.params.x;
        // console.log(productId);

        let sqlr = `select * from cart where username = '${username}'`
        con.query(sqlr, (err, resultr) => {
            if (err) throw err;
            // console.log(resultr);

            res.render('cart', {
                cart_items: resultr,
                imgsrc: '/images/' + productId + '.jpg',

            })

        })
    })
})

router.get("/remove-from-cart/:x", (req, res) => {
    let productId = req.params.x

    let sql = `select * from current_users ;`
    con.query(sql, (err, result) => {
        if (err) throw err;
        loggeduser = result[0].current_user
    })

    let sql1 = `delete from cart where username = '${loggeduser}' AND product_name = '${productId}' ;`
    con.query(sql1, (err, result1) => {
        if (err) throw err;
    })

    let sqlr = `select * from cart where username = '${loggeduser}'`
    con.query(sqlr, (err, resultr) => {
        if (err) throw err;
        // console.log(resultr);
        res.render('cart', {
            cart_items: resultr
        })
    })

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

router.get("/user-page", isAuth, (req, res) => {
    res.render('user-page', {
        name: loggeduser
    })
})

router.get("/cart/:x", (req, res) => {

    if (req.session.isAuth == true) {
        let productId = req.params.x;
        // console.log(productId);

        res.render('cart', {
            imgsrc: '/images/' + productId + '.jpg'
        })
    } else {
        // console.log("hello pratik");
        res.render('account')
    }

})

router.get("/productdetail/:x", (req, res) => {

    var productId = req.params.x;

    res.render('productdetail', {
        imgsrc: '/images/' + productId + '.jpg'
    })
})

router.get("/productdetail2/:x", (req, res) => {

    var productId = req.params.x;

    res.render('productdetail2', {
        imgsrc: '/images/' + productId + '.jpg'
    })
})

router.post("/register", urlencodedparser, function(req, res) {
    let username = req.body.register_username
    let email = req.body.email
    let password = req.body.register_password
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
    let username = req.body.login_username
        // let email = req.body.email
    let password = req.body.login_password

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

                    let sqll = `insert into current_users values ('${username}');`
                    con.query(sqll, (err, resultl) => {
                        if (err) throw err;
                    })
                    res.render('index2', {
                        name: username
                    })
                }
            })

        }
    })
})

module.exports = router