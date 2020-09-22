import React, { useState } from "react";
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import "./App.css";
import { ContactForm } from "./ContactForm/ContactForm";
import { MyState } from "./MyState/MyState";

const Body = <div className="content">This is body</div>

/**
 * Whenever you update state, it will re-render UI/JSX/Component
 */
function App() {
  const menus = ['Home', 'About'];

  const [counter, setCounter] = useState(1);

  // redux

  const contactJson = {
    firstName: true,
    lastName: true
  };

  const handleMenuClick = (event) => {
    console.log('From Parent component', { event });
  }

  const updateCounter = (event) => {
    console.log('update counter');
    setCounter(counter+1);
  }

  console.log({ counter });

  return (
    <div style={{ padding: 50 }}>
      <button onClick={updateCounter}>Count</button> <br />
      <label>{counter}</label>
      <MyState />
      <br />
      
      {/* <Header onMenuClick={handleMenuClick} headerLabel={'My Application'} menus={menus} />
      {Body}
      <ContactForm config={contactJson} />
      <Footer menus={menus} /> */}
    </div>
  );
}

export default App;
