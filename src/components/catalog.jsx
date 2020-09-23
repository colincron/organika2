import React, { Component } from "react";
import Item from "./item";
import ItemService from "../services/itemService";
import "./category.css";

class Catalog extends Component {
  state = {
    items: [],
    categories: [],
    selectedCategory: "",
  };

  render() {
    let itemsToDisplay = this.state.items;
    if (this.state.selectedCategory) {
      itemsToDisplay = itemsToDisplay.filter(
        (item) => item.category === this.state.selectedCategory
      );
    }

    return (
      <div className="catalog-page">
        <h2>Organika Market</h2>

        <div className="categories">
          <div
            className="category"
            onClick={() => this.setState({ selectedCategory: "" })}
            key="allItems"
          >
            <h6>All Items</h6>{" "}
          </div>

          {this.state.categories.map((category) => (
            <div
              className={this.getCategoryClass(category)}
              onClick={() => this.selectCategory(category)}
              key={category}
            >
              <h6>{category}</h6>
            </div>
          ))}
        </div>

        <div className="products">
          {itemsToDisplay.map((i) => (
            <Item key={i.id} product={i}></Item>
          ))}
        </div>
      </div>
    );
  }

  getCategoryClass = (catName) => {
    //console.log(catName);
    let catClass = "category";
    if(catName === this.state.selectedCategory){
      catClass += " active-cat";
    }
    return catClass;
  }
  selectCategory = (catName) => {
    //console.log("category clicked", catName);
    this.setState({ selectedCategory: catName });
    //console.log(this.state.selectedCategory);
  };

  componentDidMount() {
    // perfect place to get data from server/ DB / AJAX call
    let service = new ItemService();
    const data = service.getProducts();

    // to modify state use setState
    this.setState({ items: data });

    //console.log(data);
    // identify the unique categories from data
    let cats = [];
    for (let i = 0; i < data.length; i++) {
      let item = data[i].category;
      if (!cats.includes(item)) {
        cats.push(item);
        //console.log(cats);
      }
    }
    // set it to the state
    this.setState({ categories: cats });
  }
}

export default Catalog;
