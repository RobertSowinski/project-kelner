import { createStore, combineReducers } from 'redux';
import initialState from './initialstate';

const tablesReducer = (state = initialState.tables, action) => {
    switch (action.type) {
        case 'ADD_TABLE':
            return [...state, action.payload];
        case 'REMOVE_TABLE':
            return state.filter(table => table.id !== action.payload);
        case 'UPDATE_TABLE':
            return state.map(table => {
                if (table.id === action.payload.id) {
                    return action.payload;
                }
                return table;
            });
        default:
            return state;
    }
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