import './App.css';
import React from 'react';
import Header from './components/Header';
import Login from './components/Login';

const name="John";
const age=30;
const isLoggedin=false;


function App() {
  return <div className="App">
    {/* { isLoggedin ? <h1>Hello {name}</h1> : <h1>Hello Guest</h1> } */
    isLoggedin && <h1>Hello {name}</h1>
    }
    {
      !isLoggedin && <div> <h1>Hello Guest</h1> <Login /> </div>
    }
    </div>
  
}

export default App;
