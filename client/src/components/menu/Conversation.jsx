import React,{useEffect,useState} from 'react';
import { Box, Typography ,makeStyles} from '@material-ui/core';
import { useContext } from 'react';
import { AccountContext } from '../../context/Accountprovider';
import {getConversation, setConversation} from '../../services/api.js';
import { UserContext } from '../../context/UserProvider';
const useStyles=makeStyles({
    components:{
        display:'flex',
        height:40,
        padding:'13px 0',
        cursor:'pointer',
    },dp:{
        width:50,
        height:50,
        borderRadius:'50%',
        padding:'0 14px'
    },
    container: {
        display: 'flex'
    },
    timestamp: {
        fontSize: 12,
        marginLeft: 'auto',
        color: '#d82020',
        marginRight: 20
    },
    text: {
        display: 'block',
        color:'#d82020',
        fontSize: 14
    }
})
const Conversation = ({user}) => {
    const url=user.imageUrl;
    const classes=useStyles();
    const {account,fl,socket}=useContext(AccountContext);
    const {setPerson}=useContext(UserContext);
    const [message,setMessage] =useState({});

    useEffect(()=>{
        const getConversationMessage=async()=>{
            const data= await getConversation({sender:account.googleId ,receiver:user.googleId});
            setMessage({text :data.message ,timestamp: data.updatedAt});
        }
        getConversationMessage();
    },[fl]);

    const getUser=async ()=>{
        setPerson(user);
        await setConversation({senderId: account.googleId ,receiverId:user.googleId})
    }
    const getTime = (time) => {
        return time < 10 ? '0' + time : time; 
    } 
    return (
        <Box className={classes.components} onClick={()=>getUser()}>
            <Box>
                <img src={url} alt="dp" className={classes.dp}/>
            </Box>
            <Box style={{width: '100%'}}>
                <Box className={classes.container}
                ><Typography >{user.name}</Typography></Box>
                {
                    message.text && <Typography className={classes.timestamp}> 
                        { getTime(new Date(message.timestamp).getHours())}:{getTime(new Date(message.timestamp).getMinutes())}
                    </Typography>
                }
            </Box>
            <Box>
                <Typography className={classes.text} >{message.text}</Typography>
            </Box>
        </Box>
    )
}

export default Conversation;
