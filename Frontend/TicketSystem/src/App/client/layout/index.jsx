import React, {useState } from 'react'
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import Sidebars from './Sidebar';
import { LogOut, Menu,Grid } from 'react-feather';
import { _uselogin } from '../../../Logic/actions/_common';
const ClientLayout = ({children}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const {remove}=_uselogin();
  return (
   
  <>
    <Container fluid>
        <Row>
          <Col className="d-none d-md-block rounded col-md-2 col-2"  style={{ flex: "0 0 auto", width:'200px' }}>
           <Sidebars/>
          </Col>
          <Col className="m-1">
          <Row>
              <Col className="d-flex justify-content-between align-items-center p-3 rounded" style={{backgroundColor:'#EEE0C9'}} >
              <div className="d-block d-md-none" role="button" onClick={() => setShowSidebar(true)}>
                 <Menu/>
                </div>
                <div>
                
                <h2 style={{fontSize:'18px'}}><Grid size={20} color='orange'/> Client</h2>
                
                </div>
                
                <div className="d-flex justify-content-center align-items-center gap-2"> <button onClick={remove} style={{border:'none',backgroundColor:'transparent'}}>Logout <LogOut/></button></div>
              </Col>
            </Row>
            <Row>
              <Col className="p-1">
             {children}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> 
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

export default ClientLayout