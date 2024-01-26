import React from 'react'
import { usepicktickets } from '../../../Logic/actions/agent'
import Panelheading from '../../components/common/Panelheading';
import { Table } from 'react-bootstrap';
import { FolderOpenFilled } from '@ant-design/icons';
import AgentpickedRow from '../../../App/components/common/AgentpickedRow';
const Pickedtickets = () => {
  const {loading,list}=usepicktickets();
  return (
    <div className='mt-4'>
    <Panelheading icon={<FolderOpenFilled className='its-icon text-white'/>} title={'My Picked tickets'}/>
    <Table className='mt-3' responsive="sm" striped bordered hover>
           <thead>
             <tr>
               <th># {loading &&'...'}</th>
               <th>Title</th>
               <th>Category</th>
               <th>Priority</th>
               <th>Created At</th>
               <th>1st SLA</th>
               <th>2nd SLA</th>
               <th></th>
               {/* <th>Open</th> */}
             </tr>
           </thead>
           <tbody>
            {console.log(JSON.stringify(list))}
           {list?.map((x,index)=>(
            <>
            <AgentpickedRow x={x} index={index}/>
            </>
       ))}
   
           </tbody>
         </Table> 
         {JSON.stringify(list?.status)}
        
     </div>
  )
}

export default Pickedtickets