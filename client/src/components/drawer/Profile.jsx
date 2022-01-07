import { Box ,makeStyles,Typography} from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../context/Accountprovider';

const usestate=makeStyles({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        background:'#faa6a6'
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        marginTop:20,
        marginBottom:20,
        borderStyle:'solid',
        borderColor:'#ffffff',
        
    },
    nameContainer: {
        background: '#FFFFFF',
        padding: '12px 30px 2px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        '& :first-child': {
            fontSize: 14   ,
            color:'#d82020' 
        },
        '& :last-child': {
            margin: '14px 0',
            color: '#d82020'
        }
    },
    description: {
        padding: '10px 20px 28px 30px',
        '& > *': {
            color: '#ffffff',
            fontSize: 12
        }
    }
})


const Profile = () => {
    const classes=usestate();
    const {account}=useContext(AccountContext);
    return (<>
        <Box className={classes.imageContainer}>
            <img src={account.imageUrl} alt="dp" className={classes.profilePicture}/>
        </Box>
        <Box className={classes.nameContainer}>
            <Typography>
                Your name
            </Typography>
            <Typography> {account.name}</Typography>
        </Box>
        <Box className={classes.description}>
            <Typography> This is not your usernameor pin.This is visible to your contacts.</Typography>
        </Box>
        <Box className={classes.nameContainer}>
                <Typography>About</Typography>
                <Typography>Eat! Sleep! Code! Repeat</Typography>
        </Box>
        </>
    )
}

export default Profile;
