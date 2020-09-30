import axios from 'axios';

/*
var data = [
    {
        id: "5f40a6baac77a903d8f682c6",
        price: 12.32,
        stock: 13,
        title: "Cauliflower",
        image: "img-1.jpg",
        discount: 5,
        category: "Vegetable"
    },
    {
        id: "5f40a6ba41d9e5044ced586c",
        price: 22.71,
        stock: 21,
        title: "Strawberry",
        image: "product-6.jpg",
        discount: 10,
        category: "Fruit"
    },
    {
        id: "5f40a6baa9e6e22fa1d5fac4",
        price: 32.00,
        stock: 20,
        title: "Meat Cubes",
        image: "img-9.jpg",
        discount: 0,
        category: "Exotic Meats"
    },
    {
        id: "5f40a6baf0f068a497921d29",
        price: 6.99,
        stock: 10,
        title: "Carrot",
        image: "img-4.jpg",
        discount: 0,
        category: "Vegetable"
    },
    {
        id: "5f40a866337a3bb00793da52",
        price: 16.39,
        stock: 34,
        title: "Banana",
        image: "img-5.jpg",
        discount: 4,
        category: "Fruit"
    },
    {
        id: "5f40a866ea0a04e6891b7084",
        price: 14.00,
        stock: 14,
        title: "Orange",
        image: "product-10.jpg",
        discount: 0,
        minimum: 11,
        category: "Fruit"
    },
    {
        id: "5f40a866ea0a04e6891212333",
        price: 12.00,
        stock: 11,
        title: "Egg",
        image: "img-15.jpg",
        discount: 12,
        minimum: 7,
        category: "Dairy & Eggs"
    },
    {
        id: "5f40a866ea0a04e68911231328",
        price: 19.10,
        stock: 11,
        title: "Orange Juice",
        image: "product-15.jpg",
        discount: 12,
        minimum: 23,
        category: "Beverages"
    },
];
*/


class ItemService {
    serverUrl = 'http://fsdi.azurewebsites.net/api'

    async getProducts() {
        // retrieve prods from backend
        // http request (next unit)
        //return data;

        const resp = await axios.get(this.serverUrl+'/products');
        
        //resp.then(data => console.log("We got the response from server"));
        
        //console.log("Thank you!")

        return resp.data;
    }

    // cart = array of products
    async saveCart(userName, cart){
        let data = {
            user: userName,
            total: 0,
            products: cart,
        }
        const resp = await axios.post(this.serverUrl+'/cart', data);
        console.log(resp);
    }
}
 
export default ItemService;

/**
 * Async programming:
 *  
 */