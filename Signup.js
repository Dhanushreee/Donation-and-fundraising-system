import { Component } from 'react';
import './signup.css';
 
export default class Signup extends Component {
  
    
  render()
  {
      return (
    
    <div>
        

        <form>
          <h1>Create account </h1>
        
          <br></br>
          <br></br>
        
          <lable>{this.props.name}</lable>

          &nbsp;
          &nbsp;
         
          <div className="input-container">
         <input type="text" placeholder='           yourname' />
            </div>
        <br></br>
        <br></br>
      
          <lable>{this.props.Phone}:</lable>
          <div className="input-container2">
    <input type="text" placeholder="           Email" name="email"></input>
    </div>
 
        <br></br>
        <br></br>
      
          &nbsp;
          &nbsp;
         
        
         
        
          <lable>E-mail:</lable>
          &nbsp;
          
          <div className="input-container3">
    <input type="text" placeholder="            mobile" name="email"></input>
    </div>
  
        <br></br>
        <br></br>
    
          <lable>{this.props.Password}:</lable>
          &nbsp;
          &nbsp;
          
          <div className="input-container1">
    <input type="password"
            placeholder="          Password"></input> <br></br>
            </div>
            <br></br>
            <br></br>
            <br></br>
        <button> signup</button>
        
        
       
       
      
        </form>
      
    </div>
  )
    }
}

