
import { useState } from 'react'
import Panelheading from '../../components/Panelheading'
import { DiffOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Select} from 'antd'
import { _usecategories } from '../../../Logic/actions/_usecategories'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Clientsubmittickets = () => {
   const [loading,setloading]=useState(false);
   const route=useNavigate();
const onfinish=async(values)=>{
  setloading(true);
  try {
    const res=await axios.post(`/ticket/create`,values)
    console.log(res);
    if(res.status===201)
    {
      toast.success('Data successfully sended');
     route('/_resolved');
    }
   
    
  } catch (error) {
    toast.error('Sorry could not send');
    console.log(error)
    
  }
  finally{
    setloading(false);
    // setloading(false)
  }
console.log('something',values);
}
const {loading:catsloading,categories}=_usecategories();
const {Option}=Select;
  return (
    <div className='mt-2'>
    <Card className='mt-3'>
    <Panelheading  icon={<DiffOutlined className='its-icon text-white'/>} title={'Submit Ticket'} para={'Please fill the form below'}/>
    <div className="mt-5">
      <Form name='submit-request' layout='vertical' onFinish={onfinish}>
      <div className="row px-3">
      <div className="col-md-6 col-xs-12 ">
      <Form.Item  name={'title'} label='Title' rules={[
        {
          required: true,
          message: 'Please enter the title!',
        },
      ]}>
        <Input placeholder='e.g There is somthing wrong in my host'/>
         
        </Form.Item>
        </div>
        <div className="col-md-6 col-xs-12">
        <Form.Item name={'description'} label='Description' rules={[
        {
          required: true,
          message: 'Please input description!',
        },
      ]}>
         <Input.TextArea placeholder='Describe here'/>
        </Form.Item>
      </div>
     

     </div>
     <div className="row px-3">
      <div className="col-md-6 col-xs-12">
        <Form.Item name={'category'} label={`Category ${catsloading && "..."}`} rules={[
        {
          
          required: true,
          message: 'Please input Category!',
        },
      ]}>
          <Select placeholder='select a category'>
{categories.map((x)=><Option key={x._id} value={x._id}>{x.name}</Option>)}
          </Select>
        </Form.Item>
      </div>
      <div className="col-md-6 col-xs-12">
        <Form.Item name={'priority'} label='Priority' rules={[
        {
          required: true,
          message: 'Please input priority!',
        },
      ]}>
          <Select placeholder='select a priority'>
<Option  value={'Low'}>Low</Option>
<Option  value={'Medium'}>Medium</Option>
<Option  value={'High'}>High</Option>
<Option  value={'Critical'}>Critical</Option>
          </Select>
        </Form.Item>
      </div>
     </div>
     <div className="d-flex px-3">
     <Button loading={loading} className='bg-dark text-white'  htmlType='submit'>Submit</Button>
     </div>
     
      </Form>
     
   
    </div>
    
    </Card>
      </div>
  )
}

export default Clientsubmittickets