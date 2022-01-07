import { request, response } from "express";
import conversation from "../model/Conversation.js";

export const newConversation=async (request,response)=>{
    let senderId=request.body.senderId;
    let receiverId=request.body.receiverId;
    const exist=await conversation.findOne({members:{$all:[senderId,receiverId]}});
    if(exist){
            response.status(200).json('conversation exist');
            return;
    }
    const newconvo=new conversation({
            members:[senderId,receiverId]
        });
        
    try{
         
        const savedconvo=await newconvo.save();
        response.status(200).json(savedconvo);
    }catch(error){
        response.status(500).json(error);
    }
}

export const getConversation=async( request,response) =>{
    try{
       const convo= await conversation.findOne({members:{$all:[ request.body.sender ,request.body.receiver]}});
       response.status(200).json(convo);
    }catch(error){
        response.status(500).json(error);
    }
}