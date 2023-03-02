const express = require("express");
const connection = require("./connection/conn")
const proposals = require("./routes/proposals")
const singin = require("./routes/login")
const signup = require("./routes/signup");


const app = express();
app.use(express.json())
connection();

app.use(singin)
app.use(signup)
app.use(proposals)


app.listen(5000,()=>{
    console.log("server is up")})