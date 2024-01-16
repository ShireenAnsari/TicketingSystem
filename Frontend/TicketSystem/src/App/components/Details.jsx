
import { Modal } from 'antd';
import { __usesingleticket } from '../../Logic/actions/_client-ticket';
const Details = ({open,setOpen,ticket}) => {
 const {}= __usesingleticket(ticket.id);
  return (
    <Modal
    title={ticket.title}
    centered
    open={open}
    onOk={() => setOpen(false)}
    onCancel={() => setOpen(false)}
    width={1000}
  >
    <p>some contents...</p>
    <p>some contents...</p>
  </Modal>
  );
};
export default Details;