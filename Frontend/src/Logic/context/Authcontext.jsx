import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import axios from "axios";
export   const Authcontext=createContext();
const key="hdbfjhdf54djfnjjsdhhhbfhb";
export const _useauth=()=>useContext(Authcontext);
const Authprovider=({children})=>{
const [auth,setauth]=useState({user:null,token:""})
useEffect(()=>{
        // let user=window.localStorage.getItem("auth");
        let user=Cookies.get("auth");
        let hi;
        if(user)
        {
            hi=CryptoJS.AES.decrypt(user,key);
            if(hi)
            {
                setauth(JSON.parse(hi.toString(CryptoJS.enc.Utf8)))
            }
        }
       
    // console.log(JSON.parse(hi.toString(CryptoJS.enc.Utf8)),"hi");
    // if(user)
    // {
    //     // setauth(JSON.parse(user));
    // }
},[]);
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.common["Cookies"] = auth.token;
 return  (

 <Authcontext.Provider value={[auth,setauth]}>
  {children}
 </Authcontext.Provider> 
   
    
 );
};
export default Authprovider;