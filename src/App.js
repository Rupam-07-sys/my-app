// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
     {/* <Navbar title='TextUtils' aboutText="About"/> */}
      {/* <Navbar /> */}
      <Navbar title='TextUtils'/>
      <div className="container">
        <TextForm heading="Enter The Text to Analyze"/>
      </div>
    </>
  );
}

export default App;
