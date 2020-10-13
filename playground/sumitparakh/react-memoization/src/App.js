import React, { useState } from 'react';
import { Footer } from './Layout/Footer';
import { Header } from './Layout/Header';
import { Content } from './Layout/Content';
import { Counter } from './Components';

import './App.css';

function App() {

  const [counter, setCounter] = useState(0);
  
  const updateCounter = (e) => {
    setCounter(counter+1);
  }

  return (
    <div className="App">
      <Header></Header>
      <Content>
        <Counter counter={counter}></Counter>
        <button onClick={updateCounter}>Step Up</button>
      </Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
