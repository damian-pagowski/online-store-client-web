import { combineReducers } from 'redux'
import user from './users-reducer'
import cart from './cart-reducer'

export default combineReducers({   
    user,
    cart
})