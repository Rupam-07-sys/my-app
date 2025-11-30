// src/App.js
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes , Route,} from 'react-router-dom';


function App() {
  const[mode, setMode] = useState('light');
    const[alert, setAlert] = useState(null);


    const showAlert = (message , type)=>{
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(()=>{
        setAlert(null);
      },3000)
    }



  const toggleMode = () =>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been Enabled" ,"success ");
      document.title = 'TextUtils - Dark Mode'; 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled" ,"success ");
      document.title = 'TextUtils - Light Mode'; 


    }
  } 

  // const changeColor = (color) =>{
  //   setMode(color);
  // document.body.style.backgroundColor = color;
  // }

  
  return (
    <>
     {/* <Navbar title='TextUtils' aboutText="About"/> */}
     {/* <Router> */}
          <Navbar title='TextUtils' mode ={mode}  toggleMode={toggleMode}/>
          <Alert alert={alert}/>

          {/* <button className='btn mx-1' style={{ backgroundColor:"#042743" ,color:"white"}} onClick={()=>{changeColor("#042743")}}>Dark Blue</button>
          <button className='btn mx-1' style={{backgroundColor:"#198754", color:"white"}} onClick={()=>{changeColor("#198754")}}>Green</button>
          <button className='btn mx-1' style = {{backgroundColor:"#6f42c1", color:"white"}} onClick={()=>{changeColor("#6f42c1")}}>Purple</button>
          <button className='btn mx-1' style ={{backgroundColor:"#dc3545",color:"white"}} onClick={()=>{changeColor("#dc3545")}}> Red</button>
          <button className='btn mx-1' style = {{backgroundColor:"#0d6efd" , color : "white"}} onClick={()=>{changeColor("#0d6efd")}}>Blue</button>
          <button className='btn mx-1' style={{color:"black"}} onClick={()=>{changeColor("white")}}>White</button> */}
        
          <div className="container my-3">

                              {/* /users ---> component 1
                                  /users/home --->--->component 2 */}
            {/* <Routes> */}
                {/* <Route exact path='/About' element={<About/>}/> */}
                 
                  {/* <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode}/>}/> */}
                  <TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode}/>
               
            {/* </Routes> */}
        </div>
      {/* </Router> */}
      
      
    </>
  );
}

export default App;
