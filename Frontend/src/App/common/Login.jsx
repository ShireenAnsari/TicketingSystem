import React, { useContext } from 'react'
import { _uselogin } from '../../Logic/actions/_common'
import { Authcontext } from '../context/Authcontext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   const{submit,changehandler,logindata,loading}= _uselogin()
   const [auth]=useContext(Authcontext);
   const router=useNavigate();
   if(auth.token)
   {
    router('/');

   }

  return (
  
    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div style={{width:'300px', border:'1px solid grey', padding:'10px',borderRadius:'10px'}}>
        <h2>Login</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
        <input name='email' value={logindata.email} onChange={changehandler} />
        <input name='password' value={logindata.password} onChange={changehandler}/>
       
        <button  onClick={submit} className='btn btn-primary'> {loading?'loading...':'Login'}</button>
        </div>
        
        </div>
       
        
        </div>
  )
}

export default Login