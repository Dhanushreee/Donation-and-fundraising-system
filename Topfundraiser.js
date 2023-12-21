import * as React from 'react';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Topfundraiser.css';
import i3 from './images/i3.jpg';
import pa4 from './images/pa4.png';
import pa7 from './images/pa7.png';
import pa8 from './images/pa8.jpeg';
import pd11 from './images/pd11.jpeg';
export default function ActionAreaCard() {
  return (
      <div className='m44'>
       <center><h1>Topfundraiser</h1></center>
    <table cellPadding={40} cellSpacing={1} >
        <div className='m11'>
            <tr>
                <td><Card sx={{ maxWidth: 200}}>
    <CardActionArea>
        <CardMedia
        component="img"
        height="250"
        image={i3}
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <h5>my child fighting against Acutr  Leukaemia </h5>
            <center>
                <Link to='/Donation'><button>Donate</button>
                </Link></center>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
        </CardContent>
    </CardActionArea>
    </Card></td>
                <td><Card sx={{ maxWidth: 200 }}>
    <CardActionArea>
        <CardMedia
        component="img"
        height="250"
        image={pa7}
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <h5>my mother is fighting barin tumor</h5>
            <center>
            <Link to='/Donation'><button>Donate</button>
                </Link></center>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
        </CardContent>
    </CardActionArea>
    </Card></td>
                <td><Card sx={{ maxWidth: 200 }}>
    <CardActionArea>
        <CardMedia
        component="img"
        height="250"
        image={pd11}
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h5>my brother is met with a major accident</h5>
        <center>
        <Link to='/Donation'><button>Donate</button>
                </Link></center>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
        </CardContent>
    </CardActionArea>
    </Card></td>
                <td><Card sx={{ maxWidth: 200 }}>
    <CardActionArea>
        <CardMedia
        component="img"
        height="250"
        image={pa4}
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <h5>my Daughter is suffering from blood cancer </h5>
            <center>
            <Link to='/Donation'><button>Donate</button>
                </Link></center>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
        </CardContent>
    </CardActionArea>
    </Card></td>
                <td><Card sx={{ maxWidth: 200 }}>
    <CardActionArea>
        <CardMedia
        component="img"
        height="250"
        image={pa8}
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <h5>my child is suffering from malnutrition </h5>
            <center>
            <Link to='/Donation'><button>Donate</button>
                </Link></center>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
        </CardContent>
    </CardActionArea>
    </Card></td>
           </tr>
        </div>
    </table>
   </div>
  );
}
