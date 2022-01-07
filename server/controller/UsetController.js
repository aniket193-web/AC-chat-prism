import user from "../model/User.js";

export const addUser=async (request,response)=>{
   
   try{ 
       let exist=await user.findOne({googleId: request.body.googleId});
       if(exist){
        response.status(200).json('user already exist');
        return;
       }
    const newuser= new user(request.body);
    await newuser.save();
    response.status(200).json(newuser);
    }
   catch(error){
       response.status(500).json(error);
   }
}

export const getUser=async (request,response)=>{
    try{
      const us= await user.find({});
      response.status(200).json(us);
    }catch(error){
        response.status(500).json(error);
    }
}