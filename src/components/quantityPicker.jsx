import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
    name: "Colin",
  };

  render() {
    return (
      <div className="quantityPicker">
        <button onClick={this.decrease} disabled={this.state.quantity === 0}  className="btn btn-sm btn-info">-</button>
        <label className="btn-quantity">{this.state.quantity}</label>
        <button onClick={this.increase} className="btn btn-sm btn-info">+</button>
      </div>
    );
  }

  increase = () => {
    console.log("Increasing the value");
    
    this.setState({ quantity: this.state.quantity + 1 });
  }

  decrease = () => {    
    if(this.state.quantity > 0){
        console.log("Decreasing the value");
        this.setState({ quantity: this.state.quantity - 1})
    } 
  }
}

export default QuantityPicker;
