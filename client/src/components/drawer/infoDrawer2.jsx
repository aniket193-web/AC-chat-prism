import React from 'react';
import { Drawer ,Box, Typography,makeStyles} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import Profiles from './Profile2';

const usemake = makeStyles({
    header: {
      background: '#d82020',
      height: 98,
      color: '#FFFFFF',
      display: 'flex',
      '& > *': {
        marginTop: 'auto',
        padding: 15,
        fontWeight: 600
      }
    },
    component: {
      background: '#faa6a6',
      height: '88%'
    } 
});
  

 const InfoDrawers = ({ pr,setPr}) => {
     const classes= usemake();
     const handleClose=()=>{
         setPr(false);
     };
    return (
    <Drawer pr={pr} onClose={handleClose}>
        <Box className={classes.header}>
            <ArrowBack onClick={()=>handleClose()} />
            <Typography>Profile</Typography> 
        </Box>
        <Box className={classes.component}>
            <Profiles />
        </Box>
    </Drawer>
    );
}
export default InfoDrawers;