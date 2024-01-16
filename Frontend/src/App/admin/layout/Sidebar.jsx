import React from 'react';
import { Home, User, Bell, Activity, Grid,  } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';
import useActive from '../../../Logic/actions/_useactive';
const Sidebars = ({title=true,customStyles = {}}) => {
  const navbars = [
    { name: 'Home', icon: <Home/>, pathname: '/', divider: true },
    { name: 'Dashboard', icon: <Grid/>, pathname: '/admin', divider: true },
    { name: 'Profile', icon:  <User/>, pathname: '/admin/profile', divider: true },
    {
      name: 'Notifications',
      icon: <Bell/>,
      pathname: '/admin/notification',
      divider: true
    },
    {
      name: 'Charts',
      icon:<Activity/>,
      pathname: '/admin/charts',
      divider: true
    },{
      name: 'Add Users',
      icon:<User/>,
      pathname: '/admin/user',
      divider: false
    },
  ];
const loc=useLocation().pathname;

  const { isactive } = useActive();

  return (
    <div style={{  height: '100vh', position: 'fixed' ,backgroundColor:'darkcyan' }}>
 {title && (
  <div className='p-3 mb-5'>
    <span className='logo2'><Link to={'/admin'} style={{textDecoration:'none',color:'white'}}>Ticketing System</Link></span>
  </div>
)}  
      <div className='p-4 gap-2'>
        {navbars.map((x) => (
          <React.Fragment key={x.name}>
            <div>
             
              <Link to={x.pathname}  className={`${isactive(x.pathname) ? 'active-lnks' : ''} lnks2`}  role='button' > {x.icon}  {x.name}  </Link>
              {x.divider && <hr />}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div>
      </div>
    </div>
  );
};

export default Sidebars;
