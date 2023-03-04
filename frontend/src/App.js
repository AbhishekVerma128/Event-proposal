import logo from './logo.svg';
import './App.css';
import CreateProposal from './components/CreatePropsal/CreateProposal';
import { useState } from 'react';
import EventList from './components/eventList/eventList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import SignUp from'./components/SignUp'
import ProposalPage from './components/Proposal-user/PageNo14';
import Deatils from './components/Proposal-user/vendorDetail';

function App() {
  const [modal,setModal] =useState(false)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/proposal' element={<ProposalPage/>}/>
        <Route path='/vendordetail' element={<Deatils/>}/>
      </Routes>
      </BrowserRouter>
      {/* <EventList setModal={setModal}/>
      {modal&&<CreateProposal setModal={setModal}/>} */}
    </div>
  );
}

export default App;
