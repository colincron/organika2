export const incrementCartCounter = () => {
    return {
        type: 'INCREMENT'
    };
};


export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: text,
    };
};

export const addToCart = (quantity) => {
    return {
        type: 'ADD_TO_CART',
        payload: quantity,
    }
}