import React from 'react';

export default function Todo({ todo, toggleComplete}) {
    if(todo){
        return <li className={todo.complete ? "completed" : ''} onClick={() => toggleComplete(todo.id)}>{todo.item}</li>
    }else {
        return <h3>Loading...</h3>
    }
}