import { Box, makeStyles, Typography } from '@material-ui/core';
import { MoreVert, Search } from '@material-ui/icons';
import React,{useContext,useState} from 'react';
import { AccountContext } from '../../context/Accountprovider';
import { UserContext } from '../../context/UserProvider';
import InfoDrawers from '../drawer/infoDrawer2';
const useStyle=makeStyles({
    header:{
        display:'flex',
        height:35,
        alignItems:'center',
        background:'#d82020',
        padding:' 10px 16px'
    },
    dp:{
        width:37,
        height:37,
        borderRadius:'50%',
        borderColor:'#ffffff',
        borderStyle:'solid',
        borderWidth:1
    },
    name:{
        marginLeft:10,
        color:'#ffffff'
    },
    statues:{
        fontSize:12,
        marginLeft:10,
        color:'#ffffff'
    },
    rig:{
        marginLeft:'auto',
        '&>*':{
            padding: 8,
            fontSize:22,
            color:'#ffffff'
        }
    }
})
const ChatHeader = () => {
    const classes=useStyle();
    const {person} =useContext(UserContext);
    const {activeuser} =useContext(AccountContext);
    const [pr,setPr]=useState(false);
     const togglerDrawer=()=>{
         setPr(true);
     }
    
    return (<>
        <Box className={classes.header}>
            <img src={person.imageUrl} alt='dp' className={classes.dp} onClick={()=>togglerDrawer()} />
            <Box>
                <Typography className={classes.name}> {person.name}</Typography>
                <Typography className={classes.statues}>
                    {activeuser ?.find(user =>user.userId === person.googleId)?  'Online':'offline'}
                </Typography>
            </Box>
            <Box className={classes.rig}>
                <Search />
                <MoreVert />
            </Box>
        </Box>
        <InfoDrawers pr={pr} setPr={setPr} />
        </>
    )
}

export default ChatHeader
