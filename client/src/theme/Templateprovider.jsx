import React,{createContext} from 'react'
import { ThemeProvider,createTheme  } from '@material-ui/core/styles';

export const templateContext= createContext(null);
const Templateprovider = ({children}) => {
    const theme=createTheme ({
        overrides:{
            MuiDrawer:{
                paperAnchorLeft:{
                    height:'95%',
                    top:17,
                    width:355,
                    left:62,
                    boxShadow:'none'
                }
            },
            MuiBackdrop:{
                root:{
                    backgroundColor:'unset'
                }
            }
        }

    });

    return (
        <templateContext.Provider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </templateContext.Provider>

    )
}

export default Templateprovider;
