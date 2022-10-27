const express = require ("express")
const app = express()

app.get("/", function (req, res){
    console.log("here")
    res.status(500).json({message: "Error"})
    res.download("server.js")
    res.render("index")
})

app.listen(3000)