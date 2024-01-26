import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FolderOpenOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import Panelheading from "../../components/common/Panelheading";
import { useSingleTicketagent } from "../../../Logic/actions/agent";
import TcDetailhead from "../../components/common/TcDetailhead";
import Comments from "../../components/common/Comments";

const OpenDetailTicket = () => {
  const { id } = useParams();

  const [openEscModal, setOpenEscModal] = useState(false);
  const [why, setWhy] = useState("");

  const { loading, ticket: singleItem, EscTicket,comments,docomments,setcomments } = useSingleTicketagent(id);

  const AlertEsc = () => {
    let ok = window?.confirm("Are you sure?");
    if (ok) {
      setOpenEscModal(true);
    }
  };

  return (
    <>
      <Panelheading icon={<FolderOpenOutlined className="its-icon text-white mt-4" />} title={loading?<LoadingOutlined/>:singleItem?.title} />

      <div className="d-flex justify-content-end gap-2">
        <Button onClick={AlertEsc} className="myBtn">
          Escalate Ticket
        </Button>
        <Button className="myBtn">Handover Ticket</Button>
      </div>
    <TcDetailhead singleitem={singleItem}/>
      <Comments loading={loading} comments={comments} setcomments={setcomments} docomments={docomments} list={singleItem?.comments}/>
      <Modal centered width={700} title={singleItem?.title} open={openEscModal} onCancel={() => setOpenEscModal(false)} footer={null}>
        <div className="mt-4">
          <Input.TextArea typeof="text"  value={why} onChange={(e) => setWhy(e.target.value)} placeholder="Please write the reason, why you are escalating this ticket?" />

          <Button className="myBtn mt-2" onClick={() => EscTicket(id, why)}>
            Escalate to manager
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default OpenDetailTicket;
