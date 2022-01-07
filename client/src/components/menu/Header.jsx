import React, { useState } from 'react';
import { useContext } from 'react';
import { Box ,makeStyles } from '@material-ui/core';
import {Chat} from '@material-ui/icons';
import { AccountContext } from '../../context/Accountprovider';
import Headermenu from './Headermenu';
import InfoDrawer from '../../components/drawer/infoDrawer';

const useStyle=makeStyles({
    header:{
        height:35,
        background: '#d82020',
        padding:'10px 16px ',
        display:'flex',
        alignItems:'center'
    },
    avtar:{
        height:37,
        width: 37,
        borderRadius:'50%',
        borderStyle:'solid',
        borderColor:'#ffffff'
    },
    icons:{
        marginLeft:'auto',
        display:'flex',
        '&>*':{
            marginLeft:2,
            padding:4,
            color:'#ffffff'
        },
        '&: first-child':{
            fontSize:22,
            marginRight:8,
            marginTop:3
        }
    }
})
 const Header = () => {
     const classes=useStyle();
     const [open,setOpen]=useState(false);
     const {account}=useContext(AccountContext);
     const togglerDrawer=()=>{
         setOpen(true);
     }
    return ( <> 
        <Box className={classes.header}>
            <img src={ account.imageUrl } alt="display picture" className={classes.avtar} onClick={()=>togglerDrawer()}/>
            <Box className={classes.icons}>
                <Chat />
                <Headermenu />
            </Box>
        </Box>
        <InfoDrawer open={open} setOpen={setOpen} />
        </>
    )
}
export default Header;