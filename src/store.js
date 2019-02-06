import {createStore, applyMiddleware,compose, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {fridgeReducer} from './reducers/fridgeReducer';
import authReducer from './reducers/auth';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store =  createStore(
    combineReducers({
        form: formReducer,
        food:fridgeReducer,
        auth: authReducer
    })
    , composeEnhancers(applyMiddleware(thunk)));

    const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;