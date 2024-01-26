import { Grid } from "antd";
import { Table } from "react-bootstrap";
const TcDetailhead = ({singleitem}) => {
    const {useBreakpoint}=Grid;
  return (
    <>
    <Table className='mt-5' responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
           {useBreakpoint().md&& <th>Description</th>}
            <th>Priority</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        
            <tr>
            <td>{singleitem?.title}</td>
          {useBreakpoint().md&&  <td>{singleitem?.description}</td>}
            <td>{singleitem?.priority}</td>
            <td>{singleitem?.category?.name}</td>
            <td>{singleitem?.status}</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default TcDetailhead