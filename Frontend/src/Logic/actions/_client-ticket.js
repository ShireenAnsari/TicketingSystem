import { useEffect, useState } from "react";
import { _useauth } from "../context/Authcontext";
import axios from "axios";
import  { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
export const __usesingleticket=(id)=>{
    const [auth]=_useauth();
    const [loading,setloading]=useState(false);
    const [comments,setcomments]=useState("");
    const [singleitem,setsingleitem]=useState([])
    const authToken=auth && auth?.token;
    const fetchsingleticket=async()=>{
        setloading(true);
    try {
        const res=await axios.get(`/ticket/singles/${id}`);
        console.log(res);
        if(res.status===200)
        {
            setsingleitem(res.data.singleTicket);
            console.log('item is ',res.data.singleTicket);
        }
        
    } catch (error) {
        console.log(error);
        toast.error('Please try again later'); 
    }
    finally{
        setloading(false);
    }
    };
    useEffect(()=>{
        if(authToken && id)
        {
            fetchsingleticket();
            
            
        }

    },[authToken],id);
    const docomments=async()=>{
        setloading(true)
        try {
            const res=await axios.put('/ticket/add-comment',{ticketId:id,content:comments});
            
            if(res.status===200){
                toast.success('Comment added');
                // console.log(res);
                // fetchsingleticket();
                setsingleitem(prev=>({...prev,comments:[...prev.comments,res.data.comments]}));
                setcomments("");
                // console.log(singleitem);
            }
            
        } catch (error) {
            console.log(error)
            toast.error('Network error Please try again later');
            
        }
        finally{
            setloading(false);
        }
    }
    const deleteComment = async (commentId) => {
        try {
          setloading(true);
          // const data = await axios.delete(`/delete/comment/${commentId}`);
          // if (data.ok) {
          toast.success("deleted");
          setsingleitem((prev) => ({ ...prev, comments: singleitem.comments.filter((x) => x._id !== commentId) }));
          // }
        } catch (error) {
          console.log(error);
          toast.error("Failed, try again.");
        } finally {
          setloading(false);
        }
      };
    return{loading,singleitem,comments,setcomments,docomments,deleteComment}

};
export const _submittickets=()=>{
    const route=useNavigate();
const [loading,setloading]=useState(false);
    const onfinish=async(values)=>{
        setloading(true);
        try {
          const res=await axios.post(`/ticket/create`,values)
          console.log(res);
          if(res.status===201)
          {
            toast.success('Data successfully sended');
           route('/_open');
          }
         
          
        } catch (error) {
          toast.error('Sorry could not send');
          console.log(error)
          
        }
        finally{
          setloading(false);
        }
      console.log('something',values);
      }
    return{loading,onfinish}
}
export const _usegetlist=(url)=>{
  const [loading, setloading] = useState(false);
  const [ticket, setticket] = useState([]); // Initialize as an empty array
  const [auth] = _useauth();
  const authToken = auth && auth?.token;

  const Getlist = async () => {
    setloading(true);
    try {
      const res = await axios.get(`ticket/${url}`);
      console.log(res);
      if (res.status === 200) {
        setticket(res.data.tickets);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (authToken) {
      Getlist();
    }
  }, [authToken]);

  return { loading, ticket };
}
  