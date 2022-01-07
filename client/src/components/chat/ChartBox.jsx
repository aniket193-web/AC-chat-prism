import { Dialog,withStyles,Box,makeStyles } from '@material-ui/core';
import React,{useContext} from 'react';
import { UserContext } from '../../context/UserProvider';
import Menu from '../menu/Menu';
import Chat from './Chat';
import Emptychat from './Emptychat';
const useStyle=makeStyles({
    component:{
        display:'flex'
    },
    leftcomponent:{
        minWidth:350
    },
    rightcomponent:{
        width:'75%',
        minWidth:300,
        height:'100%',
        borderLeft: '2px solid rgba(0, 0, 0, 0.14)'
    }
})

const style={
    dialogPaper:{
        height: '95%',
        width:'91%',
        boxShadow: 'none',
        borderRadius:0,
        maxHeight:'100%',
        maxWidth: '100%',
        overflow:'Hidden',
    }
};


 const ChartBox = ({classes}) => {
     const classname=useStyle();
      const {person}=useContext(UserContext);
    return (
            <Dialog  open={true}
            classes={{paper:classes.dialogPaper}}
            BackdropProps={{style:{backgroundColor:'unset'}}}
            >
                <Box className={classname.component}>
                    <Box className={classname.leftcomponent}>
                        <Menu />
                    </Box>
                    <Box className={classname.rightcomponent}>
                       {
                           Object.keys(person).length ? <Chat />: <Emptychat />
                        } 
                    </Box>
                </Box>
            </Dialog>
    )
}
export default withStyles(style)(ChartBox);