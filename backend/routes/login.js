const { response } = require("express");
const express = require("express");
const vendor = require("../model/VendorSchema")
const router = express.Router();
router.use("/vendorsignin",(req, res)=>{
    const {contact, password}= req.body
    console.log(req.body)
    const data = vendor.findOne({contact:contact})
    if(!data){
        res.status(400).json({
            status:"Failed",
            error:"User not found"
        })
    }else{
        res.status(400).json({
            status:"Success",
            data
        })
    }
})
module.exports = router