const express = require("express");
const vendorSchema = require("../model/VendorSchema")
const bcryt = require("bcrypt");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello");
})

router.post("/signup", async (req, res) => {
    try {
        const { name, email,contact, password } = req.body;
        if (!name || !contact || !email || !password) {
            return res.status(422).json({
                status: "failed",
                error: "enter all fileds"
            })
        }
        const user_email = await vendorSchema.findOne({email})
        // check user is already exists or not
        if (user_email) {
            // 409 means duplicate request
            return res.status(422).json({
                status: "failed",
                error: "email already exist"
            });
        }
        const contactNo = await vendorSchema.findOne({contact})
        // check user is already exists or not
        if (contactNo) {
            // 409 means duplicate request
            return res.status(422).json({
                status: "failed",
                error: "contact already exist"
            });
        }
       bcryt.hash(password,10,async (err,hashpass)=>{
        if(err){
            return res.status(500).json({
               status:"failed",
               error:err.message
              })
              
           }
            const data = await vendorSchema.create({
                name,
                email,
                contact,
                password:hashpass
            })
            return res.json({
                status: "success",
                message: "user created successfully",
                data
            })
        })
        
    }
    catch (e) {
        return res.status(500).json({
            status: "failed",
            error: e.message
        })

    }
})

module.exports = router;