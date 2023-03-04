import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
//import CreateProposal from './components/CreatePropsal/CreateProposal';
//import { useState } from 'react';
//import EventList from './components/eventList/eventList';
import SignIn from './components/signin/signin';


function App() {
  
  return (
    <div className="App">
      
      {/*<BrowserRouter>
      <div className="App">
        <Routes>
          
          <Route path='/signin' element={ <SignIn />}/>
          
        </Routes>
      </div>
    </BrowserRouter>*/}
      <SignIn/>
    </div>
  );
}

export default App;
