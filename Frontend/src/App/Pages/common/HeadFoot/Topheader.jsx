import React, { useContext } from 'react'
import {style} from '../../../../Logic/hooks/Style'
import { Link } from 'react-router-dom'
import {LogIn } from 'react-feather';
import useActive from '../../../../Logic/hooks/_useactive';
import { _useauth } from '../../../../Logic/context/Authcontext';
import { _uselogin } from '../../../../Logic/actions/_common';
import { LogoutOutlined } from '@ant-design/icons';
const Topheader = () => {
const {isactive}=useActive();  

 const [auth]=_useauth();
 const {remove}=_uselogin();
  return (
    <>
     <div className='col-12 col-md-12' style={{backgroundColor:'darkcyan'}}>
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
      <Link className='lnks' to="/_open">Client Dashboard  </Link>
      <button onClick={remove}   style={{border:'none',backgroundColor:'transparent',color:'white'}}>
      Logout <LogoutOutlined/>
   </button>
      </>
      
    ) : auth.user.role === 'agent' ? (
      <>
       <Link className='lnks' to="/dashboard">Agent Dashboard</Link>
      <button onClick={{remove}}  style={{border:'none',backgroundColor:'transparent',color:'white'}}>
      Logout <LogoutOutlined/>
   </button>
      </>
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