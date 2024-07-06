//cpaapble of storing data in my mongodb
//this is my mongodb schema //smodel//userSchema.js
const mongoose=require('mongoose')
const schema={
    imageUrl:{type:String, require:true,},
    imageName:{type:String,require:true,},
    Price:{type:Number,require:true,},
    Description:{type:String,require:true}
}
//convert this into mongos schema
const ProductSchema=new mongoose.Schema(schema);
module.exports=mongoose.model('Product',ProductSchema)
