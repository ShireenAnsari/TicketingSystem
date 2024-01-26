import { Grid } from "antd"
import { Table } from "react-bootstrap"
const Tcdetailtable = ({loading,ticket}) => {
  return (
    <>
     <Table className='mt-3' responsive="sm" striped bordered hover>
           <thead>
             <tr>
               <th># {loading &&'...'}</th>
               <th>Title</th>
               <th>Priority</th>
               <th>Category</th>
               <th>Status</th>
               <th></th>
             </tr>
           </thead>
           <tbody>
            
             {ticket?.map((x,index)=>(
               <tr key={x._id}>
               <td>{++index}</td>
               <td>{x.title}</td>
               <td>{x.priority}</td>
               <td>{x.category}</td>
               <td>{x.status}</td>
               {/* <td>{x._id}</td> */}
               {/* <td role='button'>
               <Link to={`/request/detail/${x._id}`}>
               <FolderOpenFilled/>
               </Link>
           </td> */}
             </tr>
             ))}
           </tbody>
         </Table> 
    </>
  )
}

export default Tcdetailtable