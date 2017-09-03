import {combineReducers} from 'redux';
// import { routerReducer } from 'react-router-redux';

import {todos} from './todos';
import {visibilityFilter} from './visibleFilter';

const rootReducer = combineReducers({
    // routing: routerReducer,
    todos,
    visibilityFilter
});

export default rootReducer;
