import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './Navbar.css';

import Signup from './Signup';
import Topfundraiser from './Topfundraiser';
import Donation from './donation';
import Fundraiser from './fundraiser';
import Home from './home';
import Login from './longin';
import Startfund from './startfund';

function Navbarr(){
    return(
        <BrowserRouter>
            <nav>
                <ul>

                    <li className='actives'>
                        <Link to='/login' className='Link'>Login</Link>
                    </li>
                    <li className='activess'>
                        <Link to='/Signup' className='Link'>Signup</Link>
                    </li>
                    <li className='activess'>
                        <Link to='/home' className='Link'>Home</Link>
                    </li>
                    <li className='activess'>
                        <Link to='/fundraiser' className='Link'>Fundraiser</Link>
                    </li>
                    
                    <li className='activess'>
                        <Link to='/startfund' className='Link'>Startfund</Link>
                    </li>
                    
                    <li className='activess'>
                        <Link to='/Topfundraiser' className='Link'>Topfundraiser</Link>
                    </li>
                    
                    <li className='activess'>
                        <Link to='/donation' className='Link'>Donation</Link>
                    </li>
                    
                
                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/Signup' element={<Signup/>}/>
             <Route exact path='/home' element={<Home/>}/> 
                <Route exact path='/Topfundraiser' element={<Topfundraiser/>}/>
                <Route exact path='/startfund' element={<Startfund/>}/>
                <Route exact path='/fundraiser' element={<Fundraiser/>}/>
                <Route exact path='/donation' element={<Donation/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}
export default Navbarr;