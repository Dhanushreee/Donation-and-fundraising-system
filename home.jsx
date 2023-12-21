import { Link } from 'react-router-dom';
import './home.css';
export default function Home()
{
return(

<div className="h">
<form>
        <center>
                <center>
&nbsp;&nbsp;<h3>&nbsp;&nbsp;&nbsp;&nbsp;“Remember that the happiest people are not   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;those getting more,
but those giving more".</h3>
</center>
<br></br>
<center>
        <Link to='/Startfund'><button>Start funraiser</button>
        </Link></center>
        <br></br><br></br><br></br>
<center>
        <Link to='/ActionAreaCard'><button>Donation</button>
        </Link></center>
</center>
</form>




</div>
        )
}