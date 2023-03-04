const mongoose= require("mongoose");
const vendorSchema =  mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    unique:true, 
    required:true
},
contact:{
    type:Number,
    required:true
},
password:{
    type:String,
    require:true
},
confirmPassword:{
    type:String,
    require:true
}
})
const Vendor = mongoose.model("Vendors",vendorSchema)
module.exports = Vendor;