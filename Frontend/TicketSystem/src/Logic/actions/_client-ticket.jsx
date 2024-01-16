import { useEffect, useState } from "react";
import { _useauth } from "../../App/context/Authcontext";
import axios from "axios";
export const __useOpentickets=()=>{
const [loading,setloading]=useState(false);
const [list,setlist]=useState([]);
const [auth]=_useauth();
const authToken=auth && auth?.token;
const fetchingList=async()=>{
    setloading(true);
    try {
        const res=await axios.get('ticket/my-opens');   
        console.log(res);
        if(res.status===200)
        {
            setlist(res.data.tickets);
        }    
    } catch (error) {
        console.log(error);
        
    }
    finally{
        setloading(false)
    }
}
useEffect(()=>{
    if(authToken)
    {
        fetchingList();
        
    }
    },[authToken])
    return{loading,list}
};

export const useResolvedtickets=()=>{

};
export const __usesingleticket=(id)=>{
    console.log('hello',id);
    return {};

};