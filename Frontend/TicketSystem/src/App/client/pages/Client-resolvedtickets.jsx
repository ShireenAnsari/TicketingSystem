import React from 'react'
import Panelheading from '../../components/Panelheading';
import { Table } from 'react-bootstrap';
import { __useOpentickets} from '../../../Logic/actions/_client-ticket'
import { FolderFilled } from '@ant-design/icons';
const Clientresolvedtickets = () => {
  const{loading,list}= __useOpentickets();
  return (
   <div className='mt-4'>
    <Panelheading icon={<FolderFilled className='its-icon text-white'/>} title={'Resolved tickets'}/>
    <Table className='mt-3' responsive="sm" striped bordered hover variant="secondary">
           <thead>
             <tr>
               <th># {loading &&'...'}</th>
               <th>Title</th>
               <th >Description</th>
               <th>Priority</th>
               <th>Category</th>
               <th>Status</th>
             </tr>
           </thead>
           <tbody>
             {list?.map((x,index)=>(
               <tr key={x._id}>
               <td>{++index}</td>
               <td>{x.title}</td>
               <td>{x.description}</td>
               <td>{x.priority}</td>
               <td>{x.category.name}</td>
               <td>{x.status}</td>
             </tr>
             ))}
           </tbody>
         </Table> 
     </div>
  )
}

export default Clientresolvedtickets