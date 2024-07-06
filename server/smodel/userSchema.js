//cpaapble of storing data in my mongodb
//this is my mongodb schema //smodel//userSchema.js
const mongoose=require('mongoose')
const schema={
    name:{type:String, require:true,},
    email:{type:String,require:true,},
    password:{type:String,require:true,}
}
//convert this into mongos schema
const userSchema=new mongoose.Schema(schema);
module.exports=mongoose.model('User',userSchema)
