import React, { useState } from 'react';
import Register from "./Register"



function App() {

  const [registered, setRegistered] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setRegistered(true)
  }




  return (
    <div className="App">
      {!registered ? 
        <Register
          handleSubmit={handleSubmit} /> 
        : 
          ""}
    </div>
  );
}

export default App;
