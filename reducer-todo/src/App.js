import React from 'react';
import './App.css';
import { reducer } from './reducers/reducers';

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <reducer />
    </div>
  );
}

export default App;
