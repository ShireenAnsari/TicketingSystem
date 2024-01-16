import React, { useContext } from 'react';
import { style } from '../../../Logic/abc/Style';
import { Link } from 'react-router-dom'
import {LogIn } from 'react-feather';
import useActive from '../../../Logic/actions/_useactive';
import { Authcontext } from '../../context/Authcontext';
import { _uselogin } from '../../../Logic/actions/_common';
import { LogoutOutlined } from '@ant-design/icons';
const Topheader = () => {
const {isactive}=useActive();  

 const [auth]=useContext(Authcontext);
 const {remove}=_uselogin();
  return (
    <>
     <div className='container'>
      <div className={style.flexstyle}>
        <div className='logo'>Ticketing System</div>
        <div className={style.flexsty2}>
            <Link role='button' to={'/'} className={`${isactive('/') ? 'active-lnks2' : ''} lnks`}>
                Home
            </Link>
            {
  auth?.token ? (
    auth.user.role === 'client' ? (
      <>
      <Link className='lnks' to="/_">Client Dashboard  </Link>
      <button onClick={remove}   style={{border:'none',backgroundColor:'transparent',color:'white'}}>
      Logout <LogoutOutlined/>
   </button>
      </>
      
    ) : auth.user.role === 'agent' ? (
      <Link className='lnks' to="/agent">Dashboard  <button onClick={{remove}}  style={{border:'none',backgroundColor:'transparent',color:'white'}}>
      Logout <LogoutOutlined/>
   </button></Link>
    ) : auth.user.role === 'admin' ? (
      <Link className='lnks' to="/admin">Dashboard  <button onClick={{remove}}  style={{border:'none',backgroundColor:'transparent',color:'white'}}>
      Logout <LogoutOutlined/>
   </button></Link>
    ) : null
  ) : (
    <button  style={{border:'none',backgroundColor:'transparent',color:'white'}}><Link className="text-white" style={{ textDecoration: 'none' }} to="/login">
         Login <LogIn/>
      </Link></button>
  )
}

        </div>
       
      </div>
    </div>
    </>
   
  )
}

export default Topheader;