import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCartCounter } from '../store/actions/index';

class Cart extends Component {
    state = {  }
    render() { 
        return ( 
        
        
        <div>

        <h1>Shopping Cart:</h1>
        <h4>Item you added to the cart will **Magically** appear here.</h4>

            <button className="btn btn-warning" onClick={this.testDispatch}>Test Dispatch</button>
        </div>
        
        
        );
    }

    testDispatch = () => {
        console.log("dispatching");
        this.props.incrementCartCounter(); // dispatch an action to the store
    };
}
 
export default connect(null, { incrementCartCounter } )(Cart);