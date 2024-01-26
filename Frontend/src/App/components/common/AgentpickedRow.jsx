import React from 'react'
import { use2ndSLA } from '../../../Logic/hooks/usesecondSLA'
import { FolderOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const AgentpickedRow = ({x,index}) => {
    const time=use2ndSLA(x.pickedAt)
    const router=useNavigate();
  return (
    <tr>
    <td>{++index}</td>
    <td >{x.title}</td>
    <td>{x.category}</td>
    <td >{x.priority}</td>
    <td>{x.createdAt.slice(0, 10)}</td>
    <td>{x.firstSLABreach ? <span className="breached px-3">Yes</span> : "-"}</td>
    <td scope="row">
      <span className={` text-center px-3`}>
        {time}
      </span>
    </td>
    <td >
        <FolderOutlined onClick={() => router(`/agent/detail/${x._id}`)} />
      </td>
  </tr>
  )
}

export default AgentpickedRow