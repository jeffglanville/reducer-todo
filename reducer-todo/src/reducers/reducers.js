let initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

const firstAction = {
    type: "CHANGE_ITEM",
    payload: "help mom"
}

const changeComplete = {
    type: "CHANGE_COMPLETE",
    payload: true
}

export const reducer = (state, action) => {
    // if(action.type === "CHANGE_ITEM"){
    //     return { ...state, item: action.payload }
    // }else if (action.type === "CHANGE_COMPLETE") {
    //     return { ...state, completed: action.payload };
    // }else {
    //     return state;
    // }
    switch(action.type){
        case "CHANGE_ITEM" :
            return { ...state, item: action.payload }
        case "CHANGE_COMPLETE" :
            return { ...state, completed: action.payload };
        default:
            return state;
    }
}

let newState = reducer(initialState, firstAction, changeComplete);