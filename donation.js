import './donation.css'
export default function Donation()
{
    return(
        <div className="aks">
            <form>
               


    <h3>Donor Details</h3>
    
    <div className="dd1">
<input type="Text" placeholder="Full Name*"></input>
<br></br>
<br></br>
<input type="Text" placeholder="Mobile Number*"></input>
<br></br>
<br></br>
<input type="Text" placeholder="Email id*"></input>
<br></br>
<br></br>
<input type="Text" placeholder="pan Card No"></input>
<br></br>
<br></br>
<input type="Text" placeholder="Address"></input>
<br></br>
<br></br>
</div>
<div className="dd2">
<input type="Text" placeholder="Pincode"></input>&nbsp;
<input type="Text" placeholder="State"></input>&nbsp;
<input type="Text" placeholder="City"></input>&nbsp;

</div>
<br></br>
<br></br>
<button>Donate Now</button>


            </form>
        </div>
    )
}