import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Authprovider from './App/context/Authcontext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
   <Toaster/>
    <App/>
   
    
    </Authprovider>
  </React.StrictMode>
)
