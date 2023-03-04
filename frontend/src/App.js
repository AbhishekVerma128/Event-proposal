import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import EventList from './components/eventList/eventList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import SignUp from'./components/SignUp'
import ProposalPage from './components/Proposal-user/PageNo14';
import Deatils from './components/Proposal-user/vendorDetail';
import CreateProposal from "./components/CreatePropsal/CreateProposal"
import UpdateProposal from './components/updateProposal/UpdateProposal'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/proposal' element={<ProposalPage/>}/>
        <Route path='/vendordetail' element={<Deatils/>}/>
        <Route path='/eventList' element={<EventList/>}/>        
        <Route path='/createProposal' element={<CreateProposal/>}/>
        <Route path='/update/:id' element={<UpdateProposal/>}/>     
        
      </Routes>
      </BrowserRouter>      
    </div>
  );
}
     