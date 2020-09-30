import { combineReducers } from 'redux';
import cartCounterReducer from './cartCounter';
import todoReducer from './todoReducer'
import cartProductReducer from './cartProducts';

const rootReducer = combineReducers({
    count: cartCounterReducer,
    todos: todoReducer,
    cart: cartProductReducer
});

export default rootReducer;
