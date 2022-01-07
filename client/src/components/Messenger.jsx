import { useContext } from 'react';

import { AppBar, Toolbar ,makeStyles, Box} from '@material-ui/core'
import React from 'react'

import { AccountContext } from '../context/Accountprovider';
import ChartBox from './chat/ChartBox';
import LoginDialog from './account/LoginDialog';
const useStyles=makeStyles({
    component:{
        background: '#DCDCDC',
        height:'100vh'

    },
    loginHeader:{
        height:200,
        background: '#ec0f0ffc',
        boxShadow: 'none'
    },
    header:{
        height:115,
        background: '#ec0f0ffc',
        boxShadow: 'none'
    },
    image:{
        height:50,
        width:50,
        background:'#ffffff',
        borderRadius:15,
        
    },
    text:{
        marginTop: 7,
        marginLeft:10,
        fontSize:24
    }
    

});


 const Messenger = () => { 
     const classes=useStyles();
     const { account } =useContext(AccountContext);
    return (
    <Box className={classes.component}>
        <AppBar className={account? classes.header: classes.loginHeader}>
            <Toolbar className={classes.text}>
                <img src="https://clipground.com/images/ac-logo-png-15.png" alt="logo" className={classes.image}/>
               <b> CHAT PRISM</b>
            </Toolbar>
        </AppBar>
       {account ? <ChartBox />:<LoginDialog />}
        </Box>
    );
}
export default Messenger;