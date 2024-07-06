//resolver.js
//tp preprocess the query
const User=require('./smodel/userSchema');//parent
const resolvers={
    Query:{
        getUsers:async()=>{
            return await User.find();
        }
    },
    Mutation:{
        createUser: async(_,{input})=>{
        try{
            const {name,email,password}=input;
            if(!name ||!email ||!password)
                {
                    throw new Error('enter all the fields')
                }
            const newUser=new User(input);
            return await newUser.save();
            }catch(err)
            {
                throw Error(err);
            }
        },
        
        changePassword:async(_,{id,password})=>
        {
            try{
                const usernew=await User.findByIdAndUpdate(id,{password:password},{new:true});
                return usernew;
            }
            catch(err)
            {
                throw Error(err);
            }
        },
        deleteUser:async (_,{id})=>
        {
            try{
            return await User.findByIdAndDelete(id);
            }
            catch(err)
            {
                throw Error(err);
            }
        },
    },
    User:{
        email:(parent)=>parent.email ||'',
        name:(parent)=>parent.name ||'',
        password:(parent)=>parent.password ||''
    },
};
module.exports=resolvers;