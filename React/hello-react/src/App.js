import './App.css';
import React from 'react';
import Login from './components/Login';
import User from './components/User';

import Counter from './components/Counter';
import Colors from './components/Colors';

const isLoggedin = true;

const user= {
  name: "John",
  age: 30,
};

// const user2 = {
//   name: "Jane",
//   age: 25,
// };


function App() {
  return (
    <div className="App">
      <Colors />
    {/* /* <User 
      data={{
        name: "John",
        city: "Aydin",
        age: 30,
      }}
      />
    
    {/* { isLoggedin ? <h1>Hello {name}</h1> : <h1>Hello Guest</h1> } */
    // isLoggedin && <h1>Hello {user.name}</h1>
    // }
    // {
    //   !isLoggedin && <div> <h1>Hello Guest</h1> <Login /> </div>
     }
    </div>
    );
  
}

export default App;
