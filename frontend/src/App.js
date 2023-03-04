import './App.css';
import CreateProposal from './components/CreatePropsal/CreateProposal';
import { useState } from 'react';
import EventList from './components/eventList/eventList';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UpdateProposal from './components/updateProposal/UpdateProposal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/eventList' element={ <EventList />}/>
          <Route path='/createProposal' element={ <CreateProposal />}/>
          <Route path='/update/:id' element={ <UpdateProposal/>}/>

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
