
import { useLocation } from 'react-router-dom';

const useActive = () => {
  const {pathname}=useLocation();
  const isactive=(path)=>{
    return path===pathname?true:false;
    
  }
  return {isactive};
  // returning an object
};

export default useActive;