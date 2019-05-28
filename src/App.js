import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form.js';

class App extends Component{
  render(){
    return(
      <div className="container">
        <h1 className="text-center m-5 text-primary">Tweeter</h1>
        <Form />
      </div>
    )
  }
}

export default App;
