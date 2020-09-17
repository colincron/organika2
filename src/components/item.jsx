import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import ItemPhoto from './itemPhoto';

class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="item">
                <h3>Item name</h3>
                <h4>Item price</h4>
                <ItemPhoto></ItemPhoto>
                <QuantityPicker></QuantityPicker>
            </div>
         );
    }
}
 
export default Item;