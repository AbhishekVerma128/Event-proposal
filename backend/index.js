const express = require("express")
const mongoose = require("mongoose")
const vendor = require("./routes/vendor")
const user = require("./routes/user")
const app = express()
const cors = require("cors")
app.use(cors())

var bodyParser = require('body-parser')
const fileUpload = require("express-fileupload")
app.use(fileUpload())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const DB = 'mongodb+srv://parthThacker:parth1213@cluster0.twdoy22.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{console.log("Connected");}).catch((err)=>{console.log(err.message);})
//app.use(require("./route/Route"))
app.use(express.json())
app.use("/vendor",vendor)
app.use("/",user)

app.get("/",(req,res)=>{
    res.send("ok")
})

app.listen(8080,()=>{console.log("Server is up")})