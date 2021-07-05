import React from 'react';
import './Todo.css';

export default function Todo({ todo, toggleComplete}) {
    if(todo){
        return <li id='todo' className={todo.complete ? "completed" : ''} onClick={() => toggleComplete(todo.id)}>
        {todo.item}</li>
    }else {
        return <h3>Loading...</h3>
    }
}