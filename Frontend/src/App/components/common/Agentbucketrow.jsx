import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
const Agentbucketrow = ({index,x,pickAnTicket}) => {
    const calculatestartertime=(createdAt)=>{
        const diff=new Date()-new Date(createdAt);
     return   Math.floor(diff/1000);
    }
    const [starter,setstarter]=useState(calculatestartertime(x.createdAt));
    useEffect(()=>{

        const _timers=  setInterval(()=>{
           setstarter((prev)=>prev+1)
        },1000);
          return ()=>clearInterval(_timers);
       
           },[]);
           const formatominutes=(sec)=>{
            let min=Math.floor(sec/60);
            let seconds=sec%60
            return `${min.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

           }
  
  return (
    <>
       <tr key={index}>
                <td>{++index}</td>
                <td>{x.title}</td>
                <td>{x.category}</td>
                <td>{x.priority}</td>
                <td>{x.createdAt.slice(0,10)}</td>
                <th><span className={`${starter>=600&&'text-danger'}`}>{formatominutes(starter)}</span></th>
                <td><Button size='small' type='dashed' onClick={()=>pickAnTicket(x._id)}>Pick ticket</Button></td>

            </tr>
    </>
  )
}

export default Agentbucketrow