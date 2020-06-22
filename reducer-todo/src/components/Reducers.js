export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
};

export default function toDoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newState = {
        item: action.payload,
        id: Date.now(),
        completed: false,
      };
      return { ...state, todos: [...state.todos, newState] };

    case "CLEAR_COMPLETED":
      return { ...state, todos: state.todos.filter((todo) => !todo.completed) };

    case "TOGGLE_COMPLETE": {
      return {
        // ...state,
        // todos: state.todos.map((todo) => {
        // // console.log("toggle", todo.id, action.payload);
        //   todo.id === action.payload ? { ...todo, completed: !todo.completed }: todo
        // }
        // )
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),

      };
    }
    default:
      return state;
  }
}
