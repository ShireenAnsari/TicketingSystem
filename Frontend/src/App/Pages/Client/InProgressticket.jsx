import React from 'react'
import { _usegetlist} from '../../../Logic/actions/_client-ticket'
import Panelheading from '../../../App/components/common/Panelheading'
import { FolderFilled } from '@ant-design/icons'
import Tcdetailtable from '../../components/common/Tcdetailtable'
const InProgressticket = () => {
    const {loading,ticket}=_usegetlist('my-in-progress')
  return (
    <>
     {/* <Breadcrumb
    separator='>'
    items={[
      {
        title: <a href="/_">Client</a>,
      },
      
      {
        title: 'In progress tickets',
      },
    ]}
  /> */}
    <div className='mt-4'>
    <Panelheading icon={<FolderFilled className='its-icon text-white'/>} title={'In progress tickets'}/>
   <Tcdetailtable loading={loading} ticket={ticket}/>
     </div>
    </>
  )
}

export default InProgressticket