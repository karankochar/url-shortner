import React, {Component} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <div className='navbar'>
                <header>
                    <h1>MicroURL</h1>
                <nav>

                <ul className='links'>
                    <Link to='/'>
                    <li><a>Home</a></li>
                    </Link>

                    <Link to='/about'>
                    <li><a>About</a></li>
                    </Link>
                    
                    <Link to="/shorten">
                    <li><a>Shorten</a></li>
                    </Link>

                    <li><a>Solutions</a></li>
                </ul>
                </nav>
                <Link to='/login'>
                <button>Login</button>
                </Link>
                </header>

            </div>
        );
    }

}