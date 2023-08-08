import './App.css';
import {useState} from 'react';
import axios from "axios";

// https://randomuser.me/api
// axios.get('/user?ID=12345')
//     .then(function (response) {
//       //handle success
//       console.log(response)
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error)
//     })
//     .then (function() {
//       // always executed 
//     })

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
        console.log('foo')
      }}>
        Increase Counter
        </button>
        <button onClick={() => fetchRandomData()}>Fetch Random Data</button>
    </div>
  );
}

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
    .then(res => {
        console.log(res)
        return res
    })
    .catch(err => {
      console.error(err)
    })
}

export default App;
