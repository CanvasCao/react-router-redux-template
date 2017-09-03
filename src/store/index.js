import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(thunk, logger),
        // typeof window.devToolsExtension === 'function' ? window.devToolsExtension() : f => f
    ));
    return store;
}