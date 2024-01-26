import React from 'react'
import Panelheading from '../../components/common/Panelheading'
import { FileText } from 'react-feather'
import { usebuckets } from '../../../Logic/actions/agent'
import { Table } from 'react-bootstrap'
import Agentbucketrow from '../../components/common/Agentbucketrow'
import { Button } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'
const Buckets = () => {
    const {loading,list,fetchingtickets,pickAnTicket}=usebuckets();
  return (
    <div>
      <Panelheading title={'Buckets'} icon={<FileText className='its-icon text-white' size={40}/>}/>  
      {loading&&'...'}
      {/* {JSON.stringify(list)} */}
      <div className="d-flex justify-content-end">
        <Button  icon={<ReloadOutlined/>} size='small'  onClick={fetchingtickets}>  Reload</Button>
      </div>
      <small>Red bg means first sla breached</small>
      <Table className='mt-3' responsive="sm" striped bordered hover >
        <thead>
          <tr>
            <th># {loading &&'...'}</th>
            <th>Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Created at</th>
            <th>Timer</th>
           
          </tr>
        </thead>
        <tbody>
            {list.map((x,index)=><Agentbucketrow index={index} x={x} pickAnTicket={pickAnTicket}/>)}
        </tbody>
      </Table> 
      {/* <div>Hello {JSON.stringify(list)}</div> */}
    </div>
  )
}

export default Buckets