import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
//import QuantityPicker from './components/quantityPicker';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
//import Todo from './components/todo';
//import Item from './components/item';
import Catalog from './components/catalog';
// how the fuck do I import jQuery and shit for bootstrap?!


function App() {

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="App container-fluid"> 
        <Catalog></Catalog>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
