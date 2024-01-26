import {useState} from 'react'
import { Offcanvas,Row,Col } from 'react-bootstrap';
import { LogOut, Menu,Grid } from 'react-feather';
import { _uselogin } from '../../../Logic/actions/_common';
import Sidebars from './Sidebar';
const Layoutheader = ({title}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const {remove}=_uselogin();
  return (
    <>
     <Row>
              <Col className="d-flex justify-content-between align-items-center p-3 rounded" >
              <div className="d-block d-md-none" role="button" onClick={() => setShowSidebar(true)}>
                 <Menu/>
                </div>
                <div>
                
                <h2 style={{fontSize:'18px'}}><Grid size={20} color='orange'/>{title}</h2>
                
                </div>
                
                <div className="d-flex justify-content-center align-items-center gap-2"> <button onClick={remove} style={{border:'none',backgroundColor:'transparent'}}>Logout <LogOut/></button></div>
              </Col>
            </Row>
            <Offcanvas  className='back' show={showSidebar} onHide={() => setShowSidebar(false)}>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title style={{fontSize:'15px',borderBottom:'2px solid'}}> Menue</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body >
    <Sidebars title={false} customStyles={{width:'166px'}} />
  </Offcanvas.Body>
</Offcanvas>
    </>
  )
}

export default Layoutheader