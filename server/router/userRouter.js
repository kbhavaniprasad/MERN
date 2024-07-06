const express=require('express')
const router=express.Router();
const typeDefs=require('../Schema');
const resolvers=require('../resolvers');
const {ApolloServer,gql}=require('apollo-server-express');
const server=new ApolloServer({typeDefs,resolvers});
router.post('/register',async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const {data,error}=await server.executeOperation({
            query:gql`
            mutation{
            createUser(input:{name:"${name}",email:"${email}",password: "${password}"}) {
            email
            name
            id
            password
  }
}
            `
        })
        if(error)
            {
                res.status(501).send({message:err});
                res.status(201).send({data})
            }

    }
    catch(err)
    {
        throw Error(err)
    }
})
module.exports=router;