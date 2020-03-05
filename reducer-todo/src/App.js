import React from 'react';
import './App.css';
import { toDoReducer } from './reducers/reducers';


function App() {
  return (
    <div className="App">
      <toDoReducer />
      <h1>To Do List</h1>

    </div>
  );
}

export default App;
