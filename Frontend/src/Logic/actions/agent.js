import { useEffect, useState,useCallback } from "react"
import toast from 'react-hot-toast';
import axios from "axios";
import { _useauth } from "../context/Authcontext";
import { Route, useNavigate } from "react-router-dom";
export const usebuckets=()=>{
    const [list,setlist]=useState([]);
    const [loading,setloading]=useState(false);
    const [auth]=   _useauth();
    const authToken=auth && auth?.token;
    const fetchingtickets=async()=>{
        setloading(true)
        try {
            const res=await axios.get('/ticket');
            console.log(res);
            setlist(res?.data.tickets);
            
        } catch (error) {
            toast.error('Please try again later');
            console.log(error);
        }
        finally{
            setloading(false);
        }
    };
    useEffect(()=>{
    if(authToken){
        fetchingtickets();
    }

    },[authToken]);
    // const route=useNavigate();
    //pick any ticket
    const pickAnTicket=async(ticketId)=>{
        setloading(true)
        try {
            const res=await axios.put('/ticket/pick',{ticketId});
            toast.success('successfully picked');
            //  route('my-picks');
            console.log(res);
            
        } catch (error) {
            console.log(error)
            toast.error('Please try again later');
            
        }
        finally{
            setloading(false)
        }
    }
    return {loading,list,fetchingtickets,pickAnTicket}
}
export const usepicktickets=()=>{
    const [list,setlist]=useState([]);
    const [loading,setloading]=useState(false);
    const [auth]=   _useauth();
    const authToken=auth && auth?.token;
    
    const fetchMypicktickets=useCallback(
        async()=>{
            setloading(true)
            try {
                const res=await axios.get('/ticket/my-picks');
                console.log(res);
                setlist(res?.data.tickets);
                
            } catch (error) {
                toast.error('Please try again later');
                console.log(error);
            }
            finally{
                setloading(false);
            }
        },
      [authToken],
    );
    useEffect(()=>{
        fetchMypicktickets();

    },[fetchMypicktickets]);

    //pick any ticket
    return {loading,list}

}
export const useSingleTicketagent = (id) => {
  const [auth] = _useauth();
  const authToken = auth && auth?.token;

  const [ticket, setTicket] = useState({});
  const [loading, setLoading] = useState(false);
  const [comments,setcomments]=useState("");
  useEffect(() => {
    const fetchingSingleTicket = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/ticket/single/${id}`);
        setTicket(res.data);
        console.log(ticket);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id && authToken) fetchingSingleTicket();
  }, [id, authToken]);
const route =useNavigate();
  const EscTicket = async (ticketId, why) => {
    if (!why) {
      return toast.error("Please write something..");
    }
    setLoading(true);
    console.log('Demo',why);
    try {
      const res = await axios.put("ticket/escalate", { ticketId,why });
      toast.success('Successfully esclated');
      route('/my-picks');
      
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const docomments=async()=>{
    setLoading(true)
    try {
        const res=await axios.put('/ticket/add-comments',{ticketId:id,content:comments});
        
        if(res.status===200){
            toast.success('Comment added');
            // console.log(res);
            // fetchsingleticket();
            setTicket(prev=>({...prev,comments:[...prev.comments,res.data.comments]}));
            setcomments("");
            // console.log(singleitem);
        }
        
    } catch (error) {
        console.log(error)
        toast.error('Network error Please try again later');
        
    }
    finally{
        setLoading(false);
    }
}

  return {
    loading,
    ticket,
    EscTicket,
    comments,setcomments,docomments
  };
};