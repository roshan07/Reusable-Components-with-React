import React from 'react';
import Button from './components/button';
import Input from './components/input';
import './App.css';

function App() {
  let func1 = () => {
    alert("hello 1");
  }

  let func2 = () => {
    alert("hello 2");
  }

  let func3 = () => {
    alert("hello 3");
  }

  let inputFunc1 = (event) => {
    console.log(event.target.value);
  }

  let inputFunc2 = (event) => {
    alert(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button handleClick={func1} label="Submit"></Button>
        <Button handleClick={func2} label="Click"></Button>
        <Button handleClick={func3} label="Notify"></Button>
        <br></br>
        <br></br>
        <Input placeholder="input1" handleChange={inputFunc1}></Input>
        <br></br>
        <Input placeholder="input2" handleChange={inputFunc2}></Input>
        <br></br>
        <Input placeholder="input3"></Input>
      </header>
    </div>
  );
}

export default App;
