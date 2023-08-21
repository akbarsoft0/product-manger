import { combineReducers } from '@reduxjs/toolkit'
import { cartReducer } from './Reducer'

const rootred = combineReducers({
    cartReducer
});
export default rootred