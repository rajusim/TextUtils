import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  // const [alert, setAlert] = useState(null);
  
  // const showAlert = (message,type)=>{
  //      setAlert({
  //        msg: message,
  //        type: type
  //      })
  // }

  const toggleMode = () =>{
    if (mode ==='light'){
      setMode('dark');
      document.body.style.background='#042743';
      //showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.background='white';
      //showAlert("Light mode has been enabled", "success");
    }
  }  
  return (
    <>
      <Router>
        <Navbar title="My Tools" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/"  element={<Home mode={mode} />} />
          <Route path="/About"  element={<About  mode={mode} />} />
          <Route path="/TextForm" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
