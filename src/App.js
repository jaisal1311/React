import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom' ;

// import Menu1 from './components/MC1'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
