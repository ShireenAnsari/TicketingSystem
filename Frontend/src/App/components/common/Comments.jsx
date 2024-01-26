import { Button, Divider, Input, List } from 'antd'
import { _useauth } from '../../../Logic/context/Authcontext';
import { CommentOutlined, DeleteOutlined } from '@ant-design/icons';

const Comments = ({comments,setcomments,loading,docomments,list,deleteComment}) => {
  const [auth]=_useauth();
  return (
   <div className='mt-5' style={{border:'1px solid lightgrey', padding:'20px',borderRadius:'15px'}}>
    <div className="row mt-3">
        <div className="col-md-11">
          <Input.TextArea  style={{backgroundColor:'transparent', border:'1px solid lightgrey',fontWeight:'600',fontSize:'15px',paddingTop:'10px'}}
          value={comments}
          onChange={(e)=>setcomments(e.target.value)}
          />
        </div>
        <div className="col-md-1 mt-2">
<Button loading={loading} className='bg-dark text-white' onClick={docomments}>
Submit
</Button>
        </div>
      </div>
     <div className="mt-5"><b>All Comments</b></div>
   <Divider/>
    <List
          
          itemLayout="vertical"
          dataSource={list}
         
          renderItem={(item, index) => (
            <List.Item
            actions={[<div key={'client-comments'} className='mb-3 d-flex justify-content-start  align-items-center gap-2'>
             
            <CommentOutlined className='text-primary' role='button'/>,
            <React.Fragment className='mb-5'>
            {item.createdBy===auth?.user?._id&&<DeleteOutlined className='text-danger' onClick={()=>deleteComment(item?._id)}  role='button'/>}
            </React.Fragment>
            </div>,
         
          ]
          }
            // actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
            >
              {/* {console.log('This is ',singleitem?.comments)} */}
              <List.Item.Meta
                title={<a className="text-dark">{item.createdBy}</a>}
                description={[<span className="text-secondary">{item.content}</span>]}
              />
            </List.Item>
          )}
        />
   </div>
  )
}

export default Comments