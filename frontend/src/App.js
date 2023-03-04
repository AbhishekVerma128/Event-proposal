import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EventList from "./components/eventList/eventList"
import CreateProposal from "./components/CreatePropsal/CreateProposal"
import UpdateProposal from './components/updateProposal/UpdateProposal'

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/eventList' element={<EventList/>}/>
        <Route path='/createProposal' element={<CreateProposal/>}/>
        <Route path='/createProposal' element={<CreateProposal/>}/>
        <Route path='/update/:id' element={<UpdateProposal/>}/>

      </Routes>
      
    </div>
    
    </BrowserRouter>
    
  )
}
