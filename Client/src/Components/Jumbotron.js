import React, {Component} from 'react';
import './Jumbotron.css';
import jumbo from './jumbo.png';

export default class jumbotron extends Component{
    render(){
        return(
            <div className='jumbo'>
                <text>Create Click-Worthy Links</text>
                <img src={jumbo} height='300' width='500' border-radius='50' alt='scissors' ></img>
            </div>
           
        );
    }
}