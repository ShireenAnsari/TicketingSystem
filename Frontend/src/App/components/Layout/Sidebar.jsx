import React from 'react';
import {FileText, Grid,LogOut, User,Home  } from 'react-feather';
import {  Link, useLocation } from 'react-router-dom';
import useActive from '../../../Logic/hooks/_useactive';
import { _uselogin } from '../../../Logic/actions/_common';
import { _useauth } from '../../../Logic/context/Authcontext';
const Sidebars = ({title=true}) => {
  const navbarclient = [
    {
      name: 'Open Request',
      icon: <FileText size={15} color='#CE5A67' />,
      pathname: '/_open',
      divider: true
    },
    {
      name: 'Submit Request',
      icon: <FileText size={15} color='green' />,
      pathname: '/_submit',
      divider: true
    },
    {
      name: 'In Progress tickets',
      icon: <FileText size={15} color='#CE5A67' />,
      pathname: '/In-Progress',
      divider: true
    },
    {
      name: 'Resolved Requests',
      icon: <FileText size={15} color='#FAEF5D' />,
      pathname: '/_resolved',
      divider: true
    },{
      name:'Profile',
      icon:<User size={15} color='#43766C'/>,
      pathname:'/_profile',
      divider:true
    }
   
  ];
  
  const navbaragent = [
    { name: 'Dashboard', icon: <Grid/>, pathname: '/dashboard', divider: true },
   
    {
      name: 'Buckets',
      icon: <FileText />,
      pathname: '/bucket',
      divider: true
    },
    {
      name: 'Picked tickets',
      icon: <FileText />,
      pathname: '/my-picks',
      divider: true
    }
  ];
  const navbaradmin = [
    {
      name: 'Open Request',
      icon: <FileText size={15} color='#CE5A67' />,
      pathname: '/_open',
      divider: true
    },
    {
      name: 'Submit Request',
      icon: <FileText size={15} color='green' />,
      pathname: '/_submit',
      divider: true
    },
    {
      name: 'In Progress tickets',
      icon: <FileText size={15} color='#CE5A67' />,
      pathname: '/In-Progress',
      divider: true
    },
    {
      name: 'Resolved Requests',
      icon: <FileText size={15} color='#FAEF5D' />,
      pathname: '/_resolved',
      divider: true
    },{
      name:'Profile',
      icon:<User size={15} color='#43766C'/>,
      pathname:'/_profile',
      divider:true
    }
   
  ]
  const [auth]=_useauth();
  const role=auth.user.role
  const navbars=role==='client'?navbarclient:role==='agent'?navbaragent:role==='admin'>navbaradmin;
  const{remove}=_uselogin()
const loc=useLocation().pathname;
  const { isactive } = useActive();
  return (
    <div style={{  height: '100vh', position: 'fixed',width:'230px',left:'0' ,backgroundColor:'darkcyan' }}>
 {title && (
  <div className='p-3 mb-5'>
    <span className='logo2'><Link to={'/client'} style={{textDecoration:'none',color:'white'}}>Ticketing System</Link></span>
  </div>
)}  
      <div className='p-4 gap-2'>
      {console.log(auth.user.role)}
      {navbars.map((x) => (
          <React.Fragment key={x.name}>
            <div>
              <Link to={x.pathname}  className={`${isactive(x.pathname) ? 'active-lnks' : ''} lnks2`}  role='button' > {x.icon}  {x.name}  </Link>
              {x.divider && <hr />}
            </div>
          </React.Fragment>
        ))}
         <button style={{border:'none',backgroundColor:'transparent'}} onClick={remove}  role='button' className='lnks2' ><LogOut size={15} color='#64CCC5'/> Logout </button>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Sidebars;
