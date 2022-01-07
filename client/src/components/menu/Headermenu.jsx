import React,{useState,useContext} from 'react';
import { MoreVert } from '@material-ui/icons';
import { Menu,MenuItem ,makeStyles} from '@material-ui/core';
import { GoogleLogout, useGoogleLogout } from 'react-google-login';
import { clientid } from '../../constant/data';
import { AccountContext } from '../../context/Accountprovider';
import { mergeClasses } from '@material-ui/styles';
import InfoDrawer from '../../components/drawer/infoDrawer';

const useStyle=makeStyles({
    menuItem:{
        fontSize:14,
        padding:'15px 60px 5px 24px',
        color:'#d82020'
    },
    logout:{
        border:'none !important',
        color:'#d82020',
        boxShadow:'none !important',
        '&>*':{
            padding:'0px !important'
        }
    }
})
 const Headermenu = () => {
     const [open,setOpen]=useState(false);
     const [openDrawer,setOpenDrawer]=useState(false);
     
     const {setAccount}=useContext(AccountContext);
     const classes=useStyle();
     const handleClose=()=>{
         setOpen(false); 
     }
     const togglerDrawer=()=>{
        setOpenDrawer(true);
    }
   
     const handleclick=(event)=>{
         setOpen(event.currentTarget);
     }
     const onLogoutSuccess=()=>{
         alert("you have been logged out successfully");
         console.clear();
         setAccount('');

     }
    return (
        <>
            <MoreVert onClick={handleclick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center'
                }
                }
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
            >
                <MenuItem className={classes.menuItem} onClick={()=>{handleClose();togglerDrawer()}}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                    <GoogleLogout clientId={clientid} buttonText="Logout" onLogoutSuccess={onLogoutSuccess} className={classes.logout}>

                    </GoogleLogout>
                </MenuItem>
                
            </Menu>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        
        </>
    )
}
export default Headermenu;
