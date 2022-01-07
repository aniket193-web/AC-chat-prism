import { Box, Dialog,withStyles ,makeStyles, Typography, List,ListItem } from '@material-ui/core';
import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { useContext } from 'react';
import { AccountContext } from '../../context/Accountprovider';
import { clientid } from '../../constant/data';
import { addUser } from '../../services/api';
const useStyle=makeStyles({
    components:{
        display:'flex',
    },  /*6354784151*/
    leftComponent:{
        padding: '56px 0 56px 56px',
    },
    qrCode:{
        margin:'50px 0 0 50px',
        height:264,
        width:264,
    },
    title:{
        fontSize: 26,
        marginBottom: 25,
        color: '#ec0f0ff2',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:300
    },
    list:{
        '& > *':{
            fontSize:18,
            padding: 0,
            marginTop:15,
            lineHeight:'28px',
            color:'#ec0f0ff2'
        }
    }
})

const style={
    dialogPaper:{
        height: '80%',
        width:'60%',
        marginTop:'6%',
        marginBottom:'5%',
        boxShadow: 'none',
        borderRadius:10,
        maxHeight:'100%',
        maxWidth: '100%',
        overflow:'Hidden',
    }
};

const LoginDialog = ({classes}) => {
    const classname=useStyle();
    const qurl='https://pngimg.com/uploads/qr_code/qr_code_PNG6.png';
    const { account ,setAccount} =  useContext(AccountContext);
    /*cliend secret= WhLCom5yuFQ7uBJiny5gdw4J */
    const  onLoginSuccess= async(res)=>{
        console.log("login successful",res.profileObj);
        
        setAccount(res.profileObj);
        await addUser(res.profileObj);

    };
    const  onLoginFailure=()=>{
        console.log("login failure");
    };

    return (
        <Dialog open={true}
        classes={{paper:classes.dialogPaper}}
        BackdropProps={{style:{backgroundColor:'unset'}}}
        >
            <Box className={classname.components}>
                <Box className={classname.leftComponent}>
                    <Typography className={classname.title}> <b>To use AC-CHAT PRISM on your computer:</b></Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open website in Your computer.</ListItem>
                        <ListItem>2. Tap On Google button.</ListItem>
                        <ListItem>3. Accept cookies and create Google account.</ListItem>
                        <ListItem>4.Login through Google Account.</ListItem>
                        
                    </List>
                </Box>
                <Box style={{position:'relative'}}>
                    <img src="https://images.vexels.com/media/users/3/130655/isolated/preview/2752a330d2e19631af10177edd8710e1-google-plus-logo-by-vexels.png" alt="qr" className={classname.qrCode}/>
                    <Box style={{position:'absolute',left:'45%',top:'65%'}}>
                    <GoogleLogin clientId={clientid} buttonText="" isSignedIn={true} onSuccess={onLoginSuccess} onFailure={onLoginFailure} cookiePolicy={'single_host_origin'}/>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}
export default withStyles(style)(LoginDialog);