import React from 'react';
import { FileText, Grid, Home,  } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';
import useActive from '../../../Logic/actions/_useactive';
const Sidebars = ({title=true,customStyles = {}}) => {
  const navbars = [
    { name: 'Home', icon: <Home/>, pathname: '/', divider: true },
    { name: 'Dashboard', icon: <Grid/>, pathname: '/agent', divider: true },
    { name: 'Agent A', icon:  <FileText />, pathname: '/agent/a', divider: true },
   
    {
      name: 'Agent B',
      icon: <FileText />,
      pathname: '/agent/b',
      divider: true
    },
    {
      name: 'Agent C',
      icon: <FileText />,
      pathname: '/agent/c',
      divider: true
    }
  ];
  
const loc=useLocation().pathname;

  const { isactive } = useActive();

  return (
    <div style={{  height: '100vh', position: 'fixed' ,backgroundColor:'darkcyan' }}>
 {title && (
  <div className='p-3 mb-5'>
    <span className='logo2'><Link to={'/agent'} style={{textDecoration:'none',color:'white'}}>Ticketing System</Link></span>
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
