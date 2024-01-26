import Panelheading from '../../../App/components/common/Panelheading';
import { Table } from 'react-bootstrap';
import { FolderOpenFilled} from '@ant-design/icons';
import { __usesingleticket, _submittickets, _usegetlist} from '../../../Logic/actions/_client-ticket'
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
const ClientOpentickets = () => {
  const{loading,ticket:list}= _usegetlist('my-opens');
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
 <Panelheading icon={<FolderOpenFilled className='its-icon text-white mt-4'/>} title={'Open tickets'}/>
 <div className='d-flex justify-content-end'>
 </div>
 <Table className='mt-3' responsive="sm" striped bordered hover>
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
               <Link to={`/request/detail/${x._id}`}>
               <FolderOpenFilled/>
               </Link>
           </td>
              
          </tr>
          ))}
        </tbody>
      </Table> 
      
  </div>

  )
}

export default ClientOpentickets