import React, { useState } from 'react';
import './App.css';
import { Header } from './Layout/Header';
import { Footer } from './Layout/Footer';
import { Content } from './Layout/Content';
import { Counter } from './Components/Counter';

function App() {

  const [counter, setCounter] = useState(0);
  const [headerData, setHeaderData] = useState();
  const [footerData, setFooterData] = useState();

  const updateCounter = (e) => {
    setCounter(counter + 1);

    if(counter === 3) {
      setHeaderData('Header Counter is ' + counter);
    }

    if(counter === 5) {
      setFooterData('Footer Counter is ' + counter);
    }
  };

  return (
    <div className="App">
      <Header temp={headerData}></Header>
      <Content>
        <Counter counter={counter}></Counter>
        <button onClick={updateCounter}>Step Up</button>
      </Content>
      <Footer footerData={footerData}></Footer>
    </div>
  );
}

export default App;
