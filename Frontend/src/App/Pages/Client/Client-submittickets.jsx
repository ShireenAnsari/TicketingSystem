import Panelheading from '../../../App/components/common/Panelheading'
import { DiffOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Card, Form, Input, Select} from 'antd'
import { _usecategories } from '../../../Logic/actions/_usecategories'
import { _submittickets } from '../../../Logic/actions/_client-ticket'
const Clientsubmittickets = () => {
const {loading,onfinish}=_submittickets();
const {loading:catsloading,categories}=_usecategories();
const {Option}=Select;
  return (
    <div className='mt-2'>
      <Breadcrumb
    separator='>'
    items={[
      {
        title: <a href="/_">Client</a>,
      },
      
      {
        title: 'Submit ticket',
      },
    ]}
  />
    <Card className='mt-3'>
    <Panelheading  icon={<DiffOutlined className='its-icon text-white'/>} title={'Submit Ticket'} para={'Please fill the form below'}/>

    <div>
    </div>
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