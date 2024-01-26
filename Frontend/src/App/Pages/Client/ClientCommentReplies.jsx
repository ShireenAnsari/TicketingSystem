import { Button, Input, Modal } from "antd";
import React from "react";

const ClientCommentReplies = ({ open, setOpen, currentComment,reply,setreply,doreply,loading}) => {
  // Fetch all replies with current comment id -> replies/:commentId -> setState -> store all replies that will get from api
  // call in useEffect [currentComment._id]

  // render all replies

  // useState -> comment init = ""
  // submitFunc -> api -> add-reply/:commentId

  return (
    <Modal title="Basic Modal" open={open} onCancel={() => setOpen(false)} footer={null}>
        <Input value={reply} onChange={(e)=>setreply(e.target.value)} placeholder="Please add a reply" />
      {/* input box */}
      {/* submit */}
      <Button loading={loading}  onClick={doreply}>Submit reply</Button>

      {/* all replies */}
    </Modal>
  );
};

export default ClientCommentReplies;
