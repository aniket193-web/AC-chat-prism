import  mongoose  from "mongoose";
const Conversationschema = new mongoose.Schema({
    members:{
        type:Array
    },
    message:{
        type:String
    }},
    {
        timestamps:true
    }

);

const conversation=mongoose.model('conversation',Conversationschema);
export default conversation;