import React from 'react';
import { createContext,useState,useRef ,useEffect } from 'react';
import {io} from 'socket.io-client';
export const AccountContext=createContext(null);

const Accountprovider = ({children}) => {
    const [account , setAccount] =useState();
    const [activeuser,setActiveusers]=useState([]);
    const [fl,setFl]=useState(false);

    useEffect(()=>{
        console.log(activeuser);
    },[activeuser]);

    const socket =useRef();
    useEffect(()=>{
        socket.current=io('ws://localhost:9000');
    },[]);

    console.log(account);
    return (
        <AccountContext.Provider value= {{
            account, 
            setAccount,
            socket,
            setActiveusers,
            activeuser,
            fl,
            setFl
        }
        }>{children}
            </AccountContext.Provider>
    )
}

export default Accountprovider;