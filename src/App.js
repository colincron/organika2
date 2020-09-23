import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
//import QuantityPicker from './components/quantityPicker';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from './components/todo';
//import Item from './components/item';
import Catalog from './components/catalog';
import Home from './components/home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cart from './components/cart';


function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <div className="App container-fluid"> 
      <Switch>
        <Route path="/" exact component={Home} ></Route>
        <Route path="/catalog" component={Catalog} ></Route>
        <Route path="/todo" component={Todo}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
