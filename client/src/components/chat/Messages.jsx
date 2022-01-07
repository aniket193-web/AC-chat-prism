import React,{useState,useContext,useEffect,useRef} from 'react'
import { Box,makeStyles } from '@material-ui/core';
import Footer from './Footer';
import { AccountContext } from '../../context/Accountprovider';
import {newMessage,getMessages} from '../../services/api.js'
import Message from './Message';

const useStyles=makeStyles({
    wrapper:{
        backgroundSize:'50%',
        backgroundImage:' url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
    
    },
    component:{
        height:'80vh',
        overflow:'scroll',
    },
    container:{
        padding:'1px 10px'
    }
})
const Messages = ({person,conversation}) => {
    const classes=useStyles();
    const [value,setValue]=useState();
    const {account ,socket ,fl, setFl} =useContext(AccountContext);
    const [messages, setMessages]=useState([]);
    const [incomingMessage,ssendIncomingMessage]=useState(null);

    const scrollRef=useRef();


    useEffect(()=>{
        socket.current.on('getMessage',data=>{
            ssendIncomingMessage({sender:data.senderId,
            text: data.text,
            createdAt:Date.now()
        }) 
        })

    },[fl])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    },[messages])

    useEffect(()=>{
        incomingMessage && conversation?.members?.includes(incomingMessage.sender) && setMessages(prev=> [...prev,incomingMessage])
    },[incomingMessage,conversation])

    useEffect(()=>{
        const getMessageDetails=async()=>{
          let response=  await getMessages(conversation._id);
         setMessages(response.data);
        }
        getMessageDetails();
    },[conversation?._id ,person._id,fl]);

    const receiverId=conversation?.members?.find(member =>member !== account.googleId);

    const sendText=async (e)=>{
        let code=e.keyCode ||e.which 
        if(!value){
            return;
        }
        if(code===13){
            let message={
                sender:account.googleId,
                conversationId:conversation._id,
                text:value
            }
            socket.current.emit('sendMessage',{
                senderId:account.googleId,
                receiverId ,
                text:value
            })
            await newMessage(message);
            setValue('');
            setFl(prev=> !prev);
        }
    }
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.component}>
                { 
                messages && messages.map( message=>(
                    <Box className={classes.container} ref={scrollRef}>
                        <Message message={message}/>
                    </Box>
                ))
                }
            </Box>
            <Footer sendText={sendText} setValue={setValue} value={value}/>
        </Box>
    )
}

export default Messages
