import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import { userReducer, productsReducer, userServerReducer } from './reducers'

const reducer = combineReducers({
	userState: userReducer,
	userServerState: userServerReducer,
	productsState: productsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
