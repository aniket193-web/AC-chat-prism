import axios from 'axios';
const url='http://localhost:8000';
export const addUser=async (data)=>{
     try{
        let response =await axios.post( `${url}/add`,data);
        return response.data;
     }catch(error){
         console.log(error);
     }
}

export const getUser=async ()=>{
    try{
       let response =await axios.get(`${url}/users`);
       return response.data
    }catch(error){
        console.log(error);
    }
}

export const setConversation=async (data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data);
    }catch(error){
        console.log('error colling setconversation',error);
    }
}

export const getConversation =async (users)=>{
    try{
      let response=  await axios.post(`${url}/conversation/get`,users);
      return response.data;
    }catch(error){
        console.log('error while getconvo',error);
    }
}
export const newMessage =async (data) =>{
    try{
        await axios.post(`${url}/message/add`,data);
    } catch(error){
        console.log('error while colling newmessage');
    }
}
export const getMessages =async (id) =>{
    try{
        return await axios.get(`${url}/message/get/${id}`);
    } catch(error){
        console.log('error while colling getmessage');
    }
}