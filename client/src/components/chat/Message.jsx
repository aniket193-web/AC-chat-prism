import React,{useContext} from 'react';
import { Box ,Typography,makeStyles } from '@material-ui/core';
import { AccountContext } from '../../context/Accountprovider';
const useStyles= makeStyles({
    wrapper:{
        background:'#ffffff',
        color:'#d82020',
        padding:5 ,
        maxWidth:'60%',
        display :'flex',
        borderRadius:10,
        width :'fit-content',
        wordBreak:'break-word',
    
    },
    text: {
        fontSize: 14,
        padding: '0 25px 0 5px'
    },
    time: {
        fontSize: 10,
        color: '#919191',
        marginTop: 6,
        wordBreak: 'keep-all',
        marginTop: 'auto'
    },
    own:{
        background: '#d82020',
        padding: 5,
        color:'#ffffff',
        maxWidth: '60%',
        width: 'fit-content',
        marginLeft: 'auto',
        display: 'flex',
        borderRadius: 10,
        wordBreak: 'break-word'
    }
})

const Message = ({message}) => {
    const classes=useStyles();
    const {account}= useContext(AccountContext);

    const formatDate=(date) =>{
        return date < 10 ? '0' + date : date;
    }
    return (
        <Box  className={account.googleId === message.sender ? classes.own :classes.wrapper}>
            <Typography className={classes.text} >{message.text}</Typography>
            <Typography className={classes.time} >  
                {formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}
            </Typography>
        </Box>
    )
}

export default Message;
