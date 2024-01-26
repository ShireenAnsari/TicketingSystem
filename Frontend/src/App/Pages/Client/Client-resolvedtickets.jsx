import React from 'react'
import Panelheading from '../../../App/components/common/Panelheading';
import { FolderFilled, FolderOpenFilled } from '@ant-design/icons';
import { Breadcrumb, Button, Card } from 'antd';
import { _usegetlist } from '../../../Logic/actions/_client-ticket';
import Smallitems from '../../components/common/Smallitems';
import { _useauth } from '../../../Logic/context/Authcontext';
const Clientresolvedtickets = () => {
const {loading,ticket:list}=_usegetlist('resolved-tickets');
const [auth]=_useauth();
  return (
   <div className='mt-4'>
    <Breadcrumb
    separator='>'
    items={[
      {
        title: <a href="/_">Client</a>,
      },
      
      {
        title: 'Open ticket',
      },
    ]}
  />
  <br/>
    <Panelheading  icon={<FolderFilled className='its-icon text-white'/>} title={'Resolved tickets'}/>
   <div className='d-flex flex-column justify-content-center-start gap-3'>
    {[1,2,3].map((x)=><Card hoverable >
      <div className='d-flex justify-content-between align-items-center'>
      <h5>Demo Ticket</h5>
      <span>22-1-24</span>
      </div>
      <p style={{maxWidth:'90%'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi veritatis excepturi vitae, nisi assumenda beatae atque culpa rem odio qui aspernatur ducimus tempora consectetur recusandae numquam necessitatibus cum a quaerat.</p>
     <div className='mt-3'>
     <Smallitems title={'category'} content={'shdbh'}/>
      <Smallitems title={'Resolved By'} content={'shdbh'}/>
      <Smallitems title={'Comments'} content={100}/>
     </div>
     <div className='mt-3 pt-3 border-top'>
      <Button icon={<FolderOpenFilled/>}>Claim to reopen</Button>
     </div>
    </Card>)}
   </div>
         {console.log(list)}
     </div>
   
  )
}

export default Clientresolvedtickets