import React, {Component} from 'react';
import Jumbotron from './Jumbotron';
import Button from './Button';


export default class Homepage extends Component {
    render() {
        return(
            <div>
                
                <Jumbotron/>
                <Button/>
            </div>
        );
    }
}