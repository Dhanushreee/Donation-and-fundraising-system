import './fundraiser.css'
export default function Fundraiser()
{
    return(
        <div className='fr'>
            <form>
           
    <center>&nbsp;&nbsp;
&nbsp;&nbsp;<h3>&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;Your Details</h3></center>
 <div className='d1'>
 <br></br>

    &nbsp;&nbsp;
    &nbsp;&nbsp;
 <label > I am raising fund for:</label>
 
    &nbsp;&nbsp;
    &nbsp;&nbsp;
<select>
<option >Medical</option>
<option >Non-Profit</option>

</select>
<br></br>


 </div>

<div className='d2'>
<br></br>

&nbsp;&nbsp;
    &nbsp;&nbsp;
<label>The rasising funds for:</label>

&nbsp;&nbsp;
&nbsp;&nbsp;
<select>
<option >Myself</option>
<option>Sibling</option>
  <option >child</option>
  <option >Family</option>
  <option >Other</option>
</select>
</div>



    <br></br>
    &nbsp;
    &nbsp;
    &nbsp;
    
<div className="aa" >
<br></br>
  <lable>Your number:</lable>
  &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
<input  type='text' placeholder='Enter Your Number'></input>
    </div>
    <br></br>
    <br></br><br></br>
    
<center>
&nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;

            <button>Next</button>
</center>
            </form>
        </div>
    )
}