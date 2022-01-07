import React,{useEffect, useState,useRef,useContext} from 'react';
import { getUser } from '../../services/api.js';
import {Box,makeStyles ,Divider} from '@material-ui/core';
import Conversation from './Conversation';
import { AccountContext } from '../../context/Accountprovider.jsx';

const useStyles=makeStyles({
    component:{
        height:'81vh',
        overflow:'overlay',
        color:'#d82020',
        
    },
    divider:{
        margin: '0 0 0 57px',
        backgroundColor: '#F2F2F2'
    }
})
 
const Conversations = ({text}) => {
     const [user,setUsers]=useState([]);
     const {account ,socket ,setActiveusers}=useContext(AccountContext);
     const classes=useStyles();
    useEffect(()=>{
        const fetchData=async ()=>{
          let dl=await getUser();
         const filterdata= dl.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
          setUsers(filterdata);
        }
        fetchData();
    },[text])

    useEffect(()=>{
        socket.current.emit('addUser',account.googleId);
        socket.current.on('getUsers',users=>{
            setActiveusers(users);
        })
    },[account])

    return (
        <Box className={classes.component}>
            {
                user && user.map( (user,index) =>(
                user.googleId !==account.googleId && <>
                 <Conversation user={user} />
                 {   user.length !== (index + 1)  && <Divider className={classes.divider} />    }
                </>
                ))
            }
        </Box>
    )
}
export default Conversations;