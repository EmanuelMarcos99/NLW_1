const express = require("express")
const server = express()

server.get("/", (req, res) => {
     res.sendFile(__dirname + "/src/views/index.html")
})

server.listen(3000)