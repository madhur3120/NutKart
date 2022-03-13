function temp2() {
    let app = require('./../app')
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html");
    })
}