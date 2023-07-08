
import { useState, useEffect } from 'react';
import './App.css';

const Person = () => {
    return (
      <>
        <h1> Name : Smriti</h1>
        <h2> Last Name : Makkar</h2>
        <h2> Age : 18 </h2>
      </>
    )
}


const App = () => {
  const name='smriti';
  const First = 'ganeshji';
  const isNameShowing = true;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert('Reload');
    // counter=100; never modify the state means(useState) manually in react 
    alert("you have changed counter" + counter)
  } ,[counter]);


  return (
    <div className="App">
      <h1>om ganeshay namah!!</h1>
      <h1>hello, {First}</h1>
      <p>hello, { isNameShowing ? name : 'someone'}</p>
      <p> calculated number is : {2+2}</p> 

      <div className="sec2">
      <Person/>
      </div>

      <div class="learn">  { /* basic hooks and additional hooks are there in react which we can use.use of event in react onclick property in react*/ }
        <button onClick={() => setCounter((prevCount) => (prevCount)-1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => (prevCount)+1)}>+</button>
      </div>
    </div>
  );
}

export default App;
