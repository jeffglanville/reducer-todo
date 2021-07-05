import React, {useState} from 'react';
import './Form.css';

export default function ToDoForm( props ) {
    const [item, setItem] = useState('');
    const submitHandler = e => {
        e.preventDefault();
        props.addToDo(item);
        setItem('');
    };



    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-wrapper">
                    <input type="text" name="todo" value={item} onChange={e => setItem(e.target.value)} />
                    <button type="submit"> Submit</button>
                    <button type="button" onClick={props.clearCompleted}> Clear Completed</button>
                </div>
            </form>
        </div>
    );
}