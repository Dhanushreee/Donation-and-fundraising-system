import React, { useState } from 'react';
import './App.css';
import './Signup.js';
import './signup.css';

export default function Login() {
  const[user,setuser]=useState({uname:"name",upassword:"password"})
  return (
    
    <div>
        

        <form>
          <h1>Hello </h1>
        <center><h4>It is in Giving That we Recive  </h4></center>

          <br></br>
        

          <lable>{user.uname}</lable>
        
          
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <input type="text" id="name" name="name" placeholder="yourname" />
        
        <br></br>
        <br></br>
      
          <lable>{user.upassword}</lable>
          
        &nbsp;
        &nbsp;
        <input type="text" id="name" name="name" placeholder="password" />
        <br></br>
        <br></br>
        <button >Sign in</button>
        <br></br>
        <br></br>
        <h4>Don't have an account?</h4>
        <a href='./Signup.js'>Create</a>
        
       
      
        </form>
      
    </div>
  );
}


