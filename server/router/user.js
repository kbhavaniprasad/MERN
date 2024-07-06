//rest api is located router/user.js
const express=require('express')
const router=express.Router()
const User=require('../smodel/userSchema')
//rest api post method to handle post request
router.post('/',(req,res)=>{
    try{
    const {name,email,password}=req.body;//fetching the parameters form req.body
    const newUser=new User({name,email,password});//creates a new Query 
    //after query created save it into the db
    newUser.save();
    res.status(201).send({
        message:'user created',newUser
    })
}
catch(err)
{
    res.status(404).send('Error occured');
}
})

//get the data from User
router.get('/',async(req,res)=>{
    try{
        const data=await User.find();
        res.status(201).send(data)
    }
    catch(err)
    {
        res.status(504).send(err)
    }
})

//updata the data
router.put('/',async(req,res)=>{
    try{
        const {pass}=req.body
        const userId=req.params.id;
        const updateQuery=await User.updateOne({_id:userId},{$set:{password:pass}});
        if(updateQuery.nModified==0)
            {
                req.status(504).send({message:'nothing updated'});
            }
    }
    catch(err)
    {
        req.status(504).send(err);
    }
})
module.exports=router;