import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
       setAlert({
         msg: message,
         type: type
       })
       setTimeout(() => {
       setAlert(null) ;
       }, 1500);
  }

  const toggleMode = () =>{
    if (mode ==='light'){
      setMode('dark');
      document.body.style.background='#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been enabled", "success");
    }
  }  
  return (
    <>
      <Router>
        <Navbar title="My Tools" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <Routes>
          <Route path="/"  element={<Home mode={mode} />} />
          <Route path="/About"  element={<About  mode={mode} />} />
          <Route path="/TextForm" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" showAlert={showAlert} mode={mode}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
