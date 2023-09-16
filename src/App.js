import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has been Enabled", "success")
      // document.title="TextUtils-DarkMode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been Enabled", "success")
      // document.title="TextUtils-LightMode"
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <div className='container my-3'> */}


      {/* <Routes> */}
        {/* <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze " mode={mode} />}> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze " mode={mode} />
        {/* </Route> */}

        {/* <Route path='/about' element={<About/>} > */}
          {/* <About/> */}
        {/* </Route> */}
      {/* </Routes> */}



      {/* </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;