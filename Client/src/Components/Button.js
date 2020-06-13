import React, {Component} from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export default class button extends Component{
    render(){
        return(
            <div >
                <Link to ='/shorten'>
                <button className='butt' > Get started !
                </button>
                </Link>
            </div>
        );
    }
}

