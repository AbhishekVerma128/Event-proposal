const express = require("express")
const mongoose = require("mongoose")
const vendor = require("./routes/vendor")
const user = require("./routes/user")
const app = express()
const cors = require("cors")
app.use(cors())


const DB = 'mongodb+srv://parthThacker:parth1213@cluster0.twdoy22.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{console.log("Connected");}).catch((err)=>{console.log(err.message);})

app.use(express.json())
app.use("/vendor",vendor)
app.use("/",user)

app.get("/",(req,res)=>{
    res.send("ok")
})

app.listen(8080,()=>{console.log("Server is up")})