const express = require("express");
const vendorSchema = require("../model/VendorSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtToken = "abxhskjsksl";
// const requirelogin = require("../middleware/requireLogin");
const router = express.Router();

router.post("/signin",async (req,res)=>{
    try{
        const {email, password} = req.body;
        // console.log(req.body)
        if(!email || !password){
          return  res.status(422).json({
                error: "add all the fields"
            })
        }
        const userData = await vendorSchema.findOne({email})
        if(!userData){
            return  res.status(404).json({
                  error: "user not found"
              })
          }
          bcrypt.compare(password, userData.password, function (err, result) {
            // result == true
            if (err) {
                return res.status(500).json({
                    error: err.message
                })
            }
            if (result) {
                // return res.status(200).json({
                //     message: "user logged in successully"
                // })

                const token = jwt.sign({_id:userData.id},jwtToken)
                // console.log(token);
                const {_id, name, email, contact} = userData;
                // console.log({_id, name, email, username});
                return res.json({token:token,
                    user: {_id, name, email, contact},
                    message: "user logged in successully"})
                
            }
            else {
                return res.status(500).json({
                    error: "password not matched"
                })
    
            }
        })

    }catch(e){
        return res.status(500).json({
            error:e.message
        })
    }


})
// 


module.exports = router;