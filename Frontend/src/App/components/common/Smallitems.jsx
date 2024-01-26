import { Tag } from 'antd'
import React from 'react'

const Smallitems=({title,content})=>{
    return <div className='d-flex justify-content-start align-items-center gap-3 mb-3'>
      <Tag color='darkcyan'>{title}:</Tag>
      <span>{content}</span>
    </div>
  }

export default Smallitems