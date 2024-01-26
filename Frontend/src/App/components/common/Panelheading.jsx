import React from 'react'
const Panelheading = ({icon,title,para}) => {
  return (
    <div className=' d-flex justify-content-start align-items-center gap-2'>
    {icon}
     <div className='d-flex flex-column'>
      <span style={{fontSize:'30px'}}><b>{title}</b></span>
     <small>{para?para:""}</small>
     </div>
    
     </div>
  )
}

export default Panelheading