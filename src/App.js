import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   BrowserRouter,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}>
          </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>}>
          </Route> */}
          <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>
      {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
