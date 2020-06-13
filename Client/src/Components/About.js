import React, {Component} from 'react';
import './About.css'

export default class About extends Component {
    render() {
        return(
            <div>
                <main className='Container'>
                <h1 className='heading'>
                    Welcome to MicroURL
                    </h1>
                <text className='content-text'>
                Are you sick of posting URLs in emails only to have it break when sent causing the recipient to have to cut and paste it back together? Then you've come to the right place. By entering in a URL in the text field below, we will create a tiny URL that will not break in email postings and never expires.
                </text> 
                <text className='content-text'>
                This application is created by Karandeep Singh and Akash Marwah for educational purposes.
                </text>
                </main>
            </div>
        );
    }
}