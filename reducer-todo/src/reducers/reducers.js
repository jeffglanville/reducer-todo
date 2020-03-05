export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const toDoReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_ITEM" :
            return { ...state, item: action.payload, completed: false};
        case "CHANGE_COMPLETE" :
            return { ...state, completed: true };
        case "CHANGE_ID" :
            return { ...state, id: Date.now() };
        default:
            return state;
    }
}

let currentState = initialState;
const dispatch = action => {
    currentState = toDoReducer(currentState, action);
}