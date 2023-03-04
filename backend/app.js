const express = require("express");
const connection = require("./connection/conn")
const proposals = require("./routes/proposals")
const singin = require("./routes/login")
const signup = require("./routes/signup");
const cors = require("cors")

const app = express();
app.use(express.json())
connection();
app.use(cors())
app.use(singin)



app.listen(5000,()=>{
    console.log("server is up")})