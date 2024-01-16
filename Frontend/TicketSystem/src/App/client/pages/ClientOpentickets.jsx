import React, { useState } from 'react'
import Panelheading from '../../components/Panelheading';
import { Table } from 'react-bootstrap';
import { FolderFilled, FolderOpenFilled, FolderOpenOutlined } from '@ant-design/icons';
import { __useOpentickets, __usesingleticket} from '../../../Logic/actions/_client-ticket'
import Details from '../../components/Details';
const ClientOpentickets = () => {
  const{loading,list}= __useOpentickets();
  const [currentitem,setcurrentitem]=useState({});
  const [opendetails,setopendetails]=useState(false);
  return (
  <div className='mt-4'>
 <Panelheading icon={<FolderOpenFilled className='its-icon text-white'/>} title={'Open tickets'}/>
 <Table className='mt-3' responsive="sm" striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th># {loading &&'...'}</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Status</th>
            <th>Open</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((x,index)=>(
            <tr key={x._id}>
            <td>{++index}</td>
            <td>{x.title}</td>
            <td>{x.priority}</td>
            <td>{x.category.name}</td>
            <td>{x.status}</td>
            <td role='button'>
              {!opendetails?<FolderOpenFilled onClick={()=>{
                setcurrentitem({id:x._id,title:x.title})
                setopendetails(true)
                }}/>: <FolderOpenOutlined />}</td>
              
          </tr>
          ))}
        </tbody>
      </Table> 
      <Details open={opendetails} setOpen={setopendetails} ticket={currentitem}/>
  </div>

  )
}

export default ClientOpentickets