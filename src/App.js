import './App.css';
import {useState} from 'react';

// https://randomuser.me/api

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Hello codesandbox</h1>
      <h2>start coding to see sum magik happen</h2>
      <p>{counter}</p>
      <button onClick={() =>
      {
        setCounter(counter+1)
      }}>
        Increase Counter
        </button>
    </div>
  );
}

export default App;
