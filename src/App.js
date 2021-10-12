import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import login from './logo.png';
import React, { useState } from 'react';
import swal from 'sweetalert';

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleValidate = (e) => {
    e.preventDefault();
    if(user == 'reactjs@gmail.com' && pass == 12345678)
      swal("Successful Login","Welcome ReactJs","success");
    else
    swal("Wrong Crdentials","Please try again","error");
  }

  return (
    
      <div className="App-header">
        <h1 style={{marginBottom:"80px"}}>Authentication Portal</h1>
        <div className="container">
          <div className="row" >

            <div className="col-md-6">
              <img className="float-right p-12 rounded" src ={login} width="500" alt="logo.png" />
            </div>

            <div className="col-md-6 my-auto p-5 rounded">

              <form onSubmit = {handleValidate}>
                <div className="mb-3">

                  <label className="form-label">Email address</label>
                  <input type = "email" 
                         value = {user} 
                         className = "form-control" 
                         placeholder = "Enter your Email"
                         onChange = {(e) => setUser(e.target.value)}/>
                  
                </div>
                <div className="mb-3">

                  <label className="form-label">Password</label>
                  <input type = "password"
                         value = {pass} 
                         className = "form-control" 
                         placeholder = "Enter Your Password"
                         onChange = {(e) => setPass(e.target.value)}/>

                </div>
            
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>

            </div>
          </div>  
        </div>
        
      </div>
  
  );
}

export default App;
