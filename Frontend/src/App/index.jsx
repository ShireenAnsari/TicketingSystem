// import React from 'react'
// import { _usecategories } from '../Logic/actions/_usecategories'
// const App = () => {
//    const {loading,categories}=_usecategories(); 
//   return (
//     <>
//      {loading ? 'Please wait..' : `categories:${JSON.stringify(categories)}`}
//     </>
   
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './common/Login'
import Home from './common/Home'
import Clientdashboard from './client/pages/Client-dashboard'
import ClientOpentickets from './client/pages/ClientOpentickets'
import ClientRoutes from './client/pages/ClientRoutes'
import Clientsubmittickets from './client/pages/Client-submittickets'
import Clientresolvedtickets from './client/pages/Client-resolvedtickets'
import Profile from './client/pages/Profile'

const App = () => {
  const user='client'
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ClientRoutes/>}>
          <Route path="/_" element={<Clientdashboard/>} />
          <Route path="/_open" element={<ClientOpentickets/>} />
          <Route path='/_submit' element={<Clientsubmittickets/>}/>
          <Route path='/_resolved' element={<Clientresolvedtickets/>}/>
          <Route path='/_profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;