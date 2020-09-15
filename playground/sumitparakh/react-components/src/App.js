import React from "react";
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import "./App.css";
import { ContactForm } from "./ContactForm/ContactForm";
 
const Body = <div className="content">This is body</div>

function App() {
  const menus = ['Home', 'About'];

  const contactJson = {
    firstName: true,
    lastName: true
  };

  const handleMenuClick = (event) => {
    console.log('From Parent component', {event});
  }

  return (
    <div>
      <Header onMenuClick={handleMenuClick} headerLabel={'My Application'} menus={menus} />
      {Body}
      <ContactForm config={contactJson} />
      <Footer menus={menus} />
    </div>
  );
}

export default App;
