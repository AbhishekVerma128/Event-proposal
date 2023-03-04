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
router.post("/register",async (req,res)=>{
    const {name,email,contact,password,confirmPassword} = await req.body
    console.log(req.body)
    try{
        if(!name||!email||!contact||!password||!confirmPassword){
            return res.status(400).json({
                message:"Empty Field"
            })
        }
        const user = await Users.findOne({email:email})
        if(user){
            return res.status(400).json({
                message:"Empty Field"
            })
        }
        if(!user && (password===confirmPassword)){
            bcrypt.hash(password, saltRounds, async function(err, hash) {
                // Store hash in your password DB.
                if(err){
                    return res.status(500).json({
                        status:"failed",
                        message:"rgistration unsuccesful"
                    })
                }
                const user = await Users.create({name,email,contact,password:hash,confirmPassword:hash})
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

router.post("/signin",async (req,res)=>{
    const {contact,password} = req.body
    //console.log(req.body)
    try{
        if(!contact || !password){
            return res.status(400).json({
                message:"Empty Field"
            })
        }
        const user = await Users.findOne({contact:contact})
        if(!user){
            return res.status(400).json({
                message:"Invalid Credentials"
            })
        }
        else{
            bcrypt.compare(password, user.password, function(err, result) {
                // result == true
                // console.log(user.password)
                // console.log(password===user.password)
                if(err){
                    return res.status(400).json({
                        message:err.message
                    })
                }
                if(result){
                    var token = jwt.sign({ data:user.contact }, secret);
                    console.log(token)
                    res.status(200).json({
                    data:user,
                    message:"LoIn successful",
                    token
                    })
                }
                

            });
        }
    }catch(e){
        console.log(e.message)
    }
    
})

module.exports = router