import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    quantity: this.props.value,
    name: "Colin",
  };

  render() {
    return (
      <div className="quantityPicker">
        <button onClick={this.decrease} disabled={this.state.quantity === this.props.minimum}  className="btn btn-sm btn-info">-</button>
        <label className="btn-quantity">{this.state.quantity}</label>
        <button onClick={this.increase} className="btn btn-sm btn-info">+</button>
      </div>
    );
  }

  increase = () => {
    //console.log("Increasing the value");
    
    let val = this.state.quantity + 1;
    this.setState({ quantity: val });
    this.props.onValueChange(val);
  }

  decrease = () => {    
    let newVal = this.state.quantity - 1;
  
    if(this.state.quantity > this.props.minimum){
        //console.log("Decreasing the value");
        this.setState({ quantity: newVal });
        this.props.onValueChange(newVal);
    } 
  }
}

export default QuantityPicker;
