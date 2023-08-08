import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios";

function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('')

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      setRandomUserDataJSON(randomData || 'No user data found.')
    })
    
  }, [])
  const fetchRandomData = async () => {
    return axios.get('https://randomuser.me/api')
      .then(({data}) => {
          console.log(data)
          return JSON.stringify(data, null, 2)
      })
      .catch(err => {
        console.error(err)
      })
  }

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
        <pre>{randomUserDataJSON}</pre>
    </div>
  );
}



export default App;
