const express = require ("express")
const app = express()

console.log("MyFirstExpress")

app.get("/", function (req, res){
    // res.status(500).json({message: "Error"})
    // res.download("server.js")
    res.render("index.html", { text : "World"})
})
app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);
app.listen(3000)

