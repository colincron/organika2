import React, { Component } from 'react';
import './category.css'

class Category extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="category">{this.props.category}</div>
         );
    }
}

export default Category;