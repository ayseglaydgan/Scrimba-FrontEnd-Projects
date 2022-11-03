import './App.css';

import Header from './components/Header';

const name="John";
const age=30;


function App() {
  return (
    <div className="App">
      {name} is {age} years old.
      <div>
        <h1>merhaba</h1>
        <Header />
      </div>
      <div>
        <p>second div</p>
      </div>
    </div>
  );
}

export default App;
