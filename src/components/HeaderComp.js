import React,{ useEffect,useState,useContext} from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {GlobalContext} from '../context/GlobalState';

//File Name doesn't amter in component, it should match the import name
//import {Header} from './components/HeaderComp';

export const Header = () => {

    useEffect(() =>
{  
    toast.info('Expense Tracker by Ali Imran (PIAIC50192)', {position: toast.POSITION.TOP_CENTER,autoClose:5000})
}
)
    
    return (
        <h1>
           {"Expense Tracker(v2) by Ali Imran (PIAIC50192)"}
        </h1>
    )
}