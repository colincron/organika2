import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css"

class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="item">
                <img src="http://picsum.photos/200/300" alt="Product"></img>
                
                <h3>Title Here</h3>
                <div className="prices">
                    <h5>$ Total</h5>
                    <h6>$ Price</h6> 
                </div>
                <button className="btn btn-sm btn-info">Add</button>
                <QuantityPicker></QuantityPicker>
            </div>
         );
    }
}
 
export default Item;