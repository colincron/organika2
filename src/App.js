import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import QuantityPicker from './components/quantityPicker';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
//import Todo from './components/todo';
import Item from './components/item';




function App() {

  return (
    <div className="App container-fluid">
      <NavBar></NavBar>
      <h1>Howdy, React!</h1>
      <Item></Item>
      <Footer></Footer>
    </div>
  );
}

export default App;
