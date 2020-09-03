import {combineReducers} from 'redux'
import ProductReducer from './products/reducer'
import CartReducer from './cart/reducer'

export default combineReducers({
    ProductReducer,
    CartReducer,
})