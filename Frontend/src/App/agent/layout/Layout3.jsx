import React, { useContext } from 'react';
import  { useState } from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import { LogIn, Menu } from "react-feather";
import Sidebars from './Sidebar';
import Maincont from '../pages/MainCont';
import {useNavigate } from "react-router-dom";
import {  Outlet } from 'react-router-dom';
import { Authcontext } from '../../context/Authcontext';
import Cookies from 'js-cookie';
const Layout3 = () => {
    const [auth,setAuth] = useContext(Authcontext);
    const [showSidebar, setShowSidebar] = useState(false);
    const route=useNavigate();
     const isExplorePage = location.pathname === "/agent";
     const remove=()=>{
      Cookies.remove("auth");
       route('/login');
       setAuth({
        user: null,
        token: "",
      });
   }
  console.log(auth.user);
    if (  auth?.user?.role === 'agent') {
      return <> 
       <>
      <Container fluid>
        <Row>
          <Col className="d-none d-md-block" style={{ height: "100vh", width: "200px", flex: "0 0 auto", borderRight: "0.01rem solid lightgrey" }}>
           <Sidebars/>
          </Col>
          <Col className="m-1">
            <Row>
              <Col className="d-flex justify-content-between align-items-center p-3 rounded" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",backgroundColor:'darkcyan',marginTop:'-4px' }}>
              <div className="d-block d-md-none" role="button" onClick={() => setShowSidebar(true)}>
                 <Menu style={{color:'white'}}/>
                </div>
                <div>
                
                <h2 className='text-white'>Agent Dashboard</h2>
                
                </div>
                
                <div className="d-flex justify-content-center align-items-center gap-2 text-white" role="button"> <button  style={{border:'none',backgroundColor:'transparent',color:'white'}} onClick={remove}>Logout <LogIn size={14}/></button></div>
              </Col>
            </Row>
            <Row>
              <Col className="p-1">
              {isExplorePage && <Maincont/>}
              <Outlet/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Offcanvas  className='back' show={showSidebar} onHide={() => setShowSidebar(false)}>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Side Bar</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body >
    <Sidebars title={false} customStyles={{width:'166px'}} />
  </Offcanvas.Body>
</Offcanvas>
    </>
      </> 
    } else {
   return <><h2 className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>Acess denied!</h2></>;
    }
  };
  
  export default Layout3;