import { useParams } from 'react-router-dom';
import { __usesingleticket } from '../../../Logic/actions/_client-ticket';
import Panelheading from '../../../App/components/common/Panelheading';
import {  FolderOpenOutlined, LoadingOutlined } from '@ant-design/icons';
import {Breadcrumb, Divider } from 'antd';
import TcDetailhead from '../../components/common/TcDetailhead';
import Comments from '../../components/common/Comments';
const Details = () => {
const {id}=useParams()
 const {loading,singleitem,comments,setcomments,docomments,deleteComment}= __usesingleticket(id);
  return (
  <>
  <Breadcrumb
    separator='>'
    items={[
      {
        title: <a href="/_">Client</a>,
      },
      {
        title: <a href="/_open">Open request</a>,
      },
      
      {
        title: 'Details',
      },
    ]}
  />
  <Panelheading title={loading?<LoadingOutlined/>:singleitem?.title} icon={<FolderOpenOutlined className='its-icon text-white mt-4'/>}/>
  <TcDetailhead singleitem={singleitem}/>
      <Divider/>
     <Comments loading={loading} docomments={docomments} deleteComment={deleteComment} comments={comments} setcomments={setcomments} list={singleitem?.comments} />
    </>
    );
};
export default Details;