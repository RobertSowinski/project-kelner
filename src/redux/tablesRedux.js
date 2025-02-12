// Action types
const SET_TABLES = 'app/tables/SET_TABLES';
const UPDATE_TABLE = 'app/tables/UPDATE_TABLE';
const SET_LOADING = 'app/tables/SET_LOADING';
const SET_ERROR = 'app/tables/SET_ERROR';

// Action creators
export const setTables = (tables) => ({ type: SET_TABLES, payload: tables });
export const updateTable = (table) => ({ type: UPDATE_TABLE, payload: table });
export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });
export const setError = (error) => ({ type: SET_ERROR, payload: error });

// Thunks
export const fetchTables = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('http://localhost:3131/api/tables');
    const data = await response.json();
    dispatch(setTables(data));
  } catch (error) {
    dispatch(setError(error.toString()));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateTableInAPI = (table) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`http://localhost:3131/api/tables/${table.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(table),
    });
    const data = await response.json();
    dispatch(updateTable(data));
  } catch (error) {
    dispatch(setError(error.toString()));
  } finally {
    dispatch(setLoading(false));
  }
};

// Initial state
const initialState = {
  tables: [],
  loading: false,
  error: null,
};

// Reducer
const tablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLES:
      return { ...state, tables: action.payload };
    case UPDATE_TABLE:
      return {
        ...state,
        tables: state.tables.map((table) =>
          table.id === action.payload.id ? action.payload : table
        ),
      };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default tablesReducer;