import React, {Component} from 'react';
import './shorten.css';
import axios from 'axios';
import validator from 'validator';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class Shorten extends Component{
    state = {
        longUrl: '',
        link: '',
        copied: false
      };

    handleChange = (e) => {
        this.setState({url: e.target.value});
        console.log(this.state.url)
    }
    
    handleSubmit = async(e) => {
        e.preventDefault();
        this.setState({copied: false})
        const validUrl = validator.isURL(this.state.url, {
            require_protocol: true
        });
        
        if(!validUrl) {
            alert('Url is incorrect');
        }
        else {
            await axios.post('http://localhost:5000/api/url/shorten',{
            longUrl: this.state.url
        })
        .then(res => {
            console.log(res)
            this.setState({
                link : `http://localhost:5000/${res.data.urlCode}`
            })
        });
        
        }
        
    };  
    

    render(){
        return(
            
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input className="inputContainer" type="text" name="url" placeholder="Shorten your link" onChange={this.handleChange}></input>
                    <button className="btn">Shorten</button>
                </form>

            <span className="result"><a className= 'result' href={this.state.link}>{this.state.link}</a></span>
            
            <span className={this.state.link !== '' ? 'copyBtnContainer' : 'abc'}>
            <CopyToClipboard
            text={this.state.link}
            onCopy={() => this.setState({copied: true})}>
            <button className={this.state.link !== '' ? 'display-btn' : 'hide-btn'}>Copy</button>
            </CopyToClipboard>
            {this.state.copied ? <span style={{color: 'white', display:'block', backgroundColor:'#10375C', fontSize:'20px', marginTop:'10px'}}>Copied !</span> : null}

            </span>
            
            </div>

            
        )
    }
}; 