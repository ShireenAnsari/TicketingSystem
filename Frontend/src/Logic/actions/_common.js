import { useContext, useState } from "react"
import axios from "axios";
import { Authcontext } from "../context/Authcontext";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const _uselogin=()=>{
 const [logindata,setlogindata]=  useState({email:"admin@gmail.com",password:"hadi.."});
 const [loading,setloading]=useState(false);
 const [auth,setauth]=useContext(Authcontext);
 const key="hdbfjhdf54djfnjjsdhhhbfhb";
 const route=useNavigate();
 const changehandler=e=>{
   setlogindata({...logindata,[e.target.name]:e.target.value});
 };
 const remove=()=>{
    Cookies.remove("auth");
     route('/login');
     setauth({
      user: null,
      token: "",
    });
 }

//  const route=useNavigate();
 const submit=async()=>{
    setloading(true);
    try{
    const res=await axios.post('auth/signin',logindata);
    toast.success('Sucessfully logged in');
    if(res.status===200)
    {
        
        setauth(res.data);
        // setauth({...auth,token:res.data.token,user:res.data.user})
        // window.localStorage.setItem("auth",JSON.stringify(res.data));
        // let hi=Crypto.AES.encrypt(JSON.stringify(res.data),key);
        // console.log(hi);
    let hi=    CryptoJS.AES.encrypt(JSON.stringify(res.data),key).toString();
        // console.log(hi);
        Cookies.set("auth",CryptoJS.AES.encrypt(JSON.stringify(res.data),key).toString());
        // Cookies.set("auth",JSON.stringify(res.data))
        // route('/');

    }
    }
    catch(error)
    {
        console.log(error);
       toast.error('Network error! Please try again later');
    }
    finally{
        setloading(false);
    }
// console.log(logindata);
 };
 return {logindata,changehandler,submit,loading,remove}
}