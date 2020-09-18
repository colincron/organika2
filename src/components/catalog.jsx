import React, { Component } from 'react';
import Item from './item';
import ItemService from '../services/itemService';

class Catalog extends Component {
    state = { 
        items: [],
     }
    render() { 
        //console.log("Rendering...")
        return (  
            <div className="catalog-page">
                <h2>Our amazing catalog</h2>

                <div className="categories"></div>

                <div className="products">
                    {
                        this.state.items.map(i => <Item key={i.id} product={i}></Item>)
                    }
                </div>
            </div>

        );
    }

    componentDidMount() {
        // perfect place to get data from server/ DB / AJAX call
        let service = new ItemService();
        const data = service.getProducts();
        
        // to modify state use setState
        this.setState({ items: data });
    }
}
 
export default Catalog;