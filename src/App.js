import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter  as Router} from "react-router-dom";
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [bluemode, setBlueMode] = useState('light')
  const [alert, setAlert] = useState(null);

const showAlert =(messsage, type)=>{
  setAlert({
    msg: messsage,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }
}
const toggleModeBlue = ()=>{
  if(bluemode==='light'){
    setBlueMode('green')
    document.body.style.backgroundColor = 'green';
    showAlert("Blue Dark mode has been enabled", "success");
  }
  else{
    setBlueMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }
}

  return (
  <>
    {/* <Router> */}
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} toggleModeBlue={toggleModeBlue}/>
    <Alert alert={alert}/>
    <div className="container">
          {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route> */}
            {/* <Route exact path="/" element={ */}
            <TextForm heading="Enter text to analyze below"  mode={mode} showAlert={showAlert} />
            {/* </Route> */}
          {/* </Routes> */}
        </div>
    {/* </Router> */}
  </>
  );
}

export default App;
