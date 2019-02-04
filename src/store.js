import {createStore, applyMiddleware,compose, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {fridgeReducer} from './reducers/fridgeReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store =  createStore(
    combineReducers({
        form: formReducer,
        fridge:fridgeReducer
    })
    , composeEnhancers(applyMiddleware(thunk)));

export default store;