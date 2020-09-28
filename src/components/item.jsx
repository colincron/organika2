import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";
import "font-awesome/css/font-awesome.css";
import { incrementCartCounter, addToCart } from '../store/actions/index';
import { connect } from 'react-redux';


class Item extends Component {
  state = {
    minimum: this.props.product.minimum || 1,
    quantity: this.props.product.minimum || 1,
  };
  render() {
    return (
      <div className="item container-fluid">
        <img src={"/images/" + this.props.product.image} alt="Product"></img>

        <h3>{this.props.product.title}</h3>
        <div className="prices">
    <h5>Total: ${this.props.product.price * this.state.quantity}</h5>
          <h6>Price: ${this.props.product.price}</h6>
        </div>

        <QuantityPicker 
          value={this.state.quantity}
          minimum={this.state.minimum}
          onValueChange={ (qnt) => this.handleQuantityChange(qnt) }></QuantityPicker>
          <button onClick={this.addProductToCart}><i className="fa fa-cart-plus add-icon" ></i></button>
        
      </div>
    );
  }

  addProductToCart = () => {

    const addedProduct = {
      product: this.props.product,
      quantity: this.state.quantity,
    }
    this.props.addToCart(addedProduct);
  }

  /**
   * 
   *  create the action (similar to addTodo)
   *  create the reducer (similar to todoReducer)
   *  combine the new reducer into rootReducer (reducer/index.js)
   *  dispatch the action and send the addedProduct object 
   *  
   */

  handleQuantityChange = (qnt) => {
    //console.log("Quantity: " + qnt);
    this.setState({ quantity: qnt });
  }
}

export default connect(null, { incrementCartCounter, addToCart } )(Item);
