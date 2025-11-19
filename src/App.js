// src/App.js
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import About from './Components/About';

function App() {
  const[mode, setMode] = useState('light');
  

  const toggleMode = () =>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  } 

  
  return (
    <>
     {/* <Navbar title='TextUtils' aboutText="About"/> */}
     
      <Navbar title='TextUtils' mode ={mode}  toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter The Text to Analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
