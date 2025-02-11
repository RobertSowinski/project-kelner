import { createStore, combineReducers } from 'redux';
import initialState from './initialstate';

const tablesReducer = (state = initialState.tables, action) => {
    return state;
};

const subreducers = {
    tables: tablesReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;