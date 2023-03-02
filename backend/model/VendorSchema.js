const mongoose= require("mongoose");
const vendorSchema =  mongoose.Schema({
name:{type:String,required:true},
email:{type:String,unique:true, required:true},
contact:{type:Number,required:true},
password:{type:String,required:true},
})

const Vendor = mongoose.model("Vendor",vendorSchema)

module.exports = Vendor;