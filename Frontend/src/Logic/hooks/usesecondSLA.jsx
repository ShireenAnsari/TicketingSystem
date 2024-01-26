import { useEffect, useState } from "react";

export const use2ndSLA=(pickedAt)=>{
    const calculatestartertime=(createdAt)=>{
        const diff=new Date()-new Date(createdAt);
     return   Math.floor(diff/1000);
    }
    const [starter,setstarter]=useState(calculatestartertime(pickedAt));
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
           return formatominutes(starter);

};