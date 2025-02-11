
//selectors
const setTables = payload => ({ payload, type: SET_TABLES });
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const SET_TABLES = createActionName('SET_TABLES');
const Update_TABLE = createActionName('Update_TABLE');
// action creators
export const fetchTables = () => {
        return (dispatch) => {
            fetch ('http://localhost:3131/api/tables')
                .then(response => response.json())
                .then(data => (dispatch(setTables(data))));
        }
}
// reducer
const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case SET_TABLES:
            return action.payload;
        case Update_TABLE:
            return statePart.map(table => {
                return table.id === action.payload.id ? {...table, status: action.payload.status} : table;
            });
        default:
            return statePart;
    }
}
export default tablesReducer;