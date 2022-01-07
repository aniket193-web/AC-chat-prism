import { request, response } from "express";
import Message from "../model/Message.js";
import conversation from "../model/Conversation.js";
export const newMessage =async(request,response)=>{
    const newMessage=new Message(request.body);
     try{
         await newMessage.save();
         await conversation.findByIdAndUpdate(request.body.conversationId ,{message:request.body.text});
         response.status(200).json('message saved successfully');
     }catch(error){
         response.status(500).json(error);
     }
 }

 export const getMessage =async (request,response)=>{
     try{
       const message= await  Message.find({conversationId:request.params.id});
       response.status(200).json(message);
     }catch(error){
         response.status(500).json(error);
     }
 }