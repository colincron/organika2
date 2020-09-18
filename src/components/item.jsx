import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";

class Item extends Component {
  state = {};
  render() {
    return (
      <div className="item">
        <img src={"/images/" + this.props.product.image} alt="Product"></img>

        <h3>{this.props.product.title}</h3>
        <div className="prices">
          <h5>$ Total</h5>
          <h6>${this.props.product.price}</h6>
        </div>

        <QuantityPicker></QuantityPicker>
        <button className="btn btn-sm btn-primary btn-add">Add</button>
      </div>
    );
  }
}

export default Item;
