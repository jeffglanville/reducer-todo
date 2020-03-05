import React, {useReducer} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import toDoReducer, {initialState} from './components/Reducers';



function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const addTodo = (item) => dispatch({type: "ADD_TODO", payload: item})
  const toggleComplete = (id) => dispatch({type: "TOGGLE_COMPLETE", payload: id})
  const clearCompleted = () => dispatch({type: "CLEAR_COMPLETED"})
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form addTodo={addTodo} clearCompleted={clearCompleted} />
      <List todos={state.todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
