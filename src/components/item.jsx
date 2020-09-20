import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";

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
        <button className="btn btn-sm btn-primary btn-add">Add</button>
      </div>
    );
  }

  handleQuantityChange = (qnt) => {
    //console.log("Quantity: " + qnt);
    this.setState({ quantity: qnt });
  }
}

export default Item;
