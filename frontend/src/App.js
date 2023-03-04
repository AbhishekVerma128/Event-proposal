import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import EventList from './components/eventList/eventList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from'./components/SignUp'
import ProposalPage from './components/Proposal-user/PageNo14';
import Deatils from './components/Proposal-user/vendorDetail';
import CreateProposal from "./components/CreatePropsal/CreateProposal"
import UpdateProposal from './components/updateProposal/UpdateProposal'
import SignIn from './components/SignIn';
import UserHome from "./components/Proposal-user/PageNo14"
import VendorDetails from "./components/Proposal-user/vendorDetail"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>     
      <Routes>       
        <Route path='/' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/proposal' element={<ProposalPage/>}/>
        <Route path='/vendordetail' element={<Deatils/>}/>
        <Route path='/eventList' element={<EventList/>}/>        
        <Route path='/createProposal' element={<CreateProposal/>}/>
        <Route path='/allProposals' element={<UserHome/>}/>

        <Route path='/update/:id' element={<UpdateProposal/>}/>
        <Route path='/details/:id' element={<VendorDetails/>}/>       
        
      </Routes>
      </BrowserRouter>      
    </div>
  );
}
     