const express = require("express")
const router = express.Router()
const Users = require("../model/users")
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const secret = "secretForUsers"
router.get('/signup',(req,res)=>{
    res.send("ok")
})
router.post("/userregister",async (req,res)=>{
    const {nameofUser,emailofUser,contactofUser,passwordofUser,confirmPasswordofUser} = await req.body
    console.log(req.body)
    try{
        if(!nameofUser||!emailofUser||!contactofUser||!passwordofUser||!confirmPasswordofUser){
            return res.status(400).json({
                message:"Empty Field"
            })
        }
        const user = await Users.findOne({email:emailofUser})
        if(user){
            return res.status(400).json({
                message:"Empty Field"
            })
        }
        if(!user && (passwordofUser===confirmPasswordofUser)){
            bcrypt.hash(passwordofUser, saltRounds, async function(err, hash) {
                // Store hash in your password DB.
                if(err){
                    return res.status(500).json({
                        status:"failed",
                        message:"rgistration unsuccesful"
                    })
                }
                const user = await Users.create({name:nameofUser,email:emailofUser,contact:contactofUser,password:hash,confirmPassword:hash})
                res.json({
                    data:user,
                    message:"Registratin Successful",
            });
           })
        }
    }catch(e){
        console.log(e.message)
    }
})
router.post("/usersignin",async (req,res)=>{
    const {contactofUser,passwordofUser} = req.body
    console.log(req.body)
    try{
        if(!contactofUser || !passwordofUser){
            return res.status(400).json({
                message:"Empty Field"
            })
        }
        const user = await Users.findOne({contact:contactofUser})
        if(!user){
            return res.status(400).json({
                message:"Invalid Credentials"
            })
        }
        else{
            bcrypt.compare(passwordofUser, user.password, async function(err, result) {
                // result == true
                 console.log(user.password)
                 //console.log(passwordofUser===user.passwordofUser)
                 //console.log(result)
                if(err){
                    return res.status(400).json({
                        message:err.message
                    })
                }
                var token = jwt.sign({ data:user.contact }, secret);
                    console.log(token)
                    res.status(200).json({
                    data:user,
                    message:"LogIn successful",
                    token
                    })
            });
        }
    }catch(e){
        console.log(e.message)
    }
})
module.exports = router