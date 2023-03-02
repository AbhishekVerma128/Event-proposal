import logo from './logo.svg';
import './App.css';
import CreateProposal from './components/CreatePropsal/CreateProposal';
import { useState } from 'react';
import EventList from './components/eventList/eventList';

function App() {
  const [modal,setModal] =useState(false)
  return (
    <div className="App">
      <EventList setModal={setModal}/>
      {modal&&<CreateProposal setModal={setModal}/>}
    </div>
  );
}

export default App;
