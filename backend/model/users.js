const mongoose= require("mongoose");
const userSchema =  mongoose.Schema({
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
const User = mongoose.model("Users",userSchema)
module.exports = User;