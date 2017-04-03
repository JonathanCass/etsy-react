import { createStore } from 'redux'
import productsReducer from './reducers/products'

const store = createStore(productsReducer)

export default store