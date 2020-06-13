import React, {Component} from 'react';
import Navbar from './Components/navbar';
import './App.css';
import './Components/Jumbotron'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shorten from './Components/Shorten';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Login from './Components/Login';



class App extends Component {
  
  render(){

  return (
    <div>

    
      <Router>
      <Navbar/>
        <Switch>
        <Route path = '/shorten' component={Shorten}/>
        <Route path = '/' exact component={Homepage}/>
        <Route path = '/about' component={About}/>
        <Route path = '/login' component={Login}/>
        </Switch>
      </Router>
      
      
    </div>
  );
  }
}

export default App;
