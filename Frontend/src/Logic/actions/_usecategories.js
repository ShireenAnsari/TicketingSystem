import axios from "axios";
import { useState,useEffect } from "react";
export const _usecategories = () => {
  const [categories,setcategores]=useState(["first"]);
  const [loading,setloading]=useState(false);
  const getcategory=async()=>{
    setloading(true);
    try{
      const res=await axios.get('http://localhost:8000/Category');
      console.log(res);
      setcategores(res.data.categories);
      //error->objet->response(object) error is object inside error response is object
    }
    catch(error)
    {
      console.log(error);
     toast.error('Please check your internet connection');
     alert('Please check your internet connection');
      
    }
    finally{
      setloading(false);
    }
   
  };
  useEffect(()=>{
    getcategory();
      },[])
  return ({loading,categories}
  )
}

