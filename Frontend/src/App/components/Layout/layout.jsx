import React from 'react'
import { Col, Container ,Row } from "react-bootstrap";
import Sidebars from './Sidebar';
import Layoutheader from './Layoutheader';

const Layout = ({children,title}) => {
  return (
  <>
    <Container fluid>
        <Row>
          <Col className="d-none d-md-block rounded col-md-2 col-2"  style={{ flex: "0 0 auto", width:'250px' }}>
           <Sidebars/>
          </Col>
          <Col className="m-1">
            <Layoutheader title={title}/>
            <Row>
              <Col className="p-1">
             {children}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> 
    
  </>
  )
}
export default Layout