import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
//import QuantityPicker from './components/quantityPicker';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
//import Todo from './components/todo';
import Item from './components/item';




function App() {

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="App container-fluid">
        
        <h1>Howdy, React!</h1>
        <Item></Item>
        
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
