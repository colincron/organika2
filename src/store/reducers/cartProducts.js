import ItemService from '../../services/itemService';

const cartProductReducer = (state = [], action) => {

    switch(action.type) {
        case "ADD_PRODUCT":
            /**
             * algorithm to:
             * add items to the cart
             * check if the item is already present
             * if so, dont add, just sum the quantities
             * 
             */
            const prodCode = action.payload.product.id;
            // check if there is another product with the same code in cart
            let found = false;
            let cart = [...state]; //copy the state
            for( let i = 0; i < cart.length; i++){
                const prod=cart[i];
                if(prod.product.id === prodCode) {
                    prod.quantity += action.payload.quantity;
                    found = true;
                }
            }

            // the cart does not contain that item
            if(!found) {
                cart.push(action.payload)
            }

            // update server
            let service = new ItemService();
            
            // Verify if there is a cart for Colin
            // if so, send PUT
            // else send POST
            service.saveCart('Colin', cart);


            return cart;
        
        case "REMOVE_PRODUCT":

            /**
             * create copy of the state
             * travel array
             * look for the item with if-action.payload
             * remove that item
             * return the copy
             */

            return [...state.filter(pc => pc.product.id !== action.payload )];
        
        default:
            return state;
    }
};

export default cartProductReducer;