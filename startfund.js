import './startfund.css';
function Startfund()
{
    return(
        <div className="sf">
            <form>
               

   <center><h3>Patient Details</h3></center>
                
                <br></br>
   <center></center>
   <input type="text" placeholder='  Enter Your Name'/>
   <br></br>
   <br></br>
   &nbsp;
   &nbsp;
   <input type="text" placeholder='  Disease'/>
   <br></br>
   <br></br>
   &nbsp;
   &nbsp;
   <input type="text" placeholder='  Goal Amount'/>
   <br></br>
   <br></br>
   &nbsp;
   &nbsp;
   <input type="text" placeholder='  City Name'/>
   <br></br>
   <br></br>
   &nbsp;
   &nbsp;
   <input type="text" placeholder='  Patient Age'/>
   <br></br>
   
   
   <h4>is Patient?</h4>
   
  
   <select>
<option >Admited</option>
<option >Not Admited</option>
<option >Under Home  treatment</option>

</select>
   
   <br></br>
   <br></br>
   
   <center><button>Start raising fund</button></center> 
   
            </form>
        </div>
    )
}
export default  Startfund;