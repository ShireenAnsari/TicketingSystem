import React from 'react'
import { Carousel,Progress,Space } from 'antd';
import Topheader from './HeadFoot/Topheader';
const Home = () => {
  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    background: '#364d79',
  };
  const stylcls='d-flex justify-content-center align-items-center'
  return (
    <>
     <Topheader/>
    <Carousel autoplay >
   
    <div>
      <h3 className={stylcls} style={contentStyle}>Make ticketing Easy</h3>
    </div>
    <div>
      <h3 className={stylcls} style={contentStyle}>Easy access</h3>
    </div>
    <div>
      <h3 className={stylcls} style={contentStyle}>Lorem ipsum</h3>
    </div>
    <div>
      <h3 className={stylcls} style={contentStyle}>Lorem ipsum</h3>
    </div>
  </Carousel>
  <h3 className='text-center mt-4'>Progress Bars</h3>
  <div className={`${stylcls},mt-4`} >
    
  <Space wrap>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </Space>
  </div>

  
    </>
    
    
  )
}

export default Home