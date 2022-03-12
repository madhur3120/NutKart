const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "Pp27Bb07@",
    database: "redstore"
})

con.query(`select * from users`, (err, result) => {
    if (err) throw err;
    console.log("mysql connects for new project")
})

module.exports = con