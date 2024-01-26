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
import Home from './Pages/common/Home'
import Login from './Pages/common/Login'
import { ClientRoutes,ClientOpentickets,Clientresolvedtickets,Clientsubmittickets,Details,Profile,InProgressticket} from '../App/Pages/Client/Commonroutes'
import {Buckets,Pickedtickets,OpenDetailTicket,Agentdashboard,AgentRoutes} from '../App/Pages/Agent/Commonroutesagent'
const App = () => {
  const user='client'
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route element={<ClientRoutes/>}>
        <Route path="/_open" element={<ClientOpentickets/>}/>
        <Route path='/_submit' element={<Clientsubmittickets/>}/>
        <Route path='/In-Progress' element={<InProgressticket/>}/>
        <Route path='/_resolved' element={<Clientresolvedtickets/>}/>
        <Route path='/_profile' element={<Profile/>}/>
        <Route path='/request/detail/:id' element={<Details/>}/>
        </Route>
        <Route element={<AgentRoutes/>}>
          <Route path='/dashboard' element={<Agentdashboard/>}/>
          <Route path='/bucket' element={<Buckets/>}/>
          <Route path='/my-picks' element={<Pickedtickets/>}/>
          <Route path="agent/detail/:id" element={<OpenDetailTicket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;