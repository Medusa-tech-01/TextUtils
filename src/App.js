import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('white')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'white'){
      setMode('#042743')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('white')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }

  const redMode = () => {
    if(mode === '#aa0a0a'){
      setMode('white')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
    else{
      setMode('#aa0a0a')
      document.body.style.backgroundColor = '#aa0a0a';
      showAlert("Red Mode has been enabled", "success")
    }
  }

  const greenMode = () => {
    if(mode === '#054d2c'){
      setMode('white')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
    else{
      setMode('#054d2c')
      document.body.style.backgroundColor = '#054d2c';
      showAlert("Green Mode has been enabled", "success")
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} redMode={redMode} greenMode={greenMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes>
              <Route exact path="/about" element={<About />}>
              </Route>
              <Route exact path="/" element={<TextForm heading="Enter your text here" mode={mode} showAlert={showAlert}/>}>
              </Route>
          </Routes> */}
          <TextForm heading="Enter your text here" mode={mode} showAlert={showAlert}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
