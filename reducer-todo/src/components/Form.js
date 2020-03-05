import React, {useState} from 'react';

export default function ToDoForm({ addToDo, clearCompleted }) {
    const [item, setItem] = useState('');
    const submitHandler = e => {
        e.preventDefault();
        console.log(addToDo);
        addToDo(item);
        setItem('');
    };

    const clearCompletedHandler = e => {
        e.preventDefault();
        clearCompleted();
    };

    return (
        <div>
            <form onSubmit={e => submitHandler(e)}>
                <div className="form-wrapper">
                    <input type="text" name="todo" value={item} onChange={e => setItem(e.target.value)} />
                    <button type="submit">Submit</button>
                    <button onClick={e => clearCompletedHandler(e)}>Clear Completed</button>
                </div>
            </form>
        </div>
    );
}