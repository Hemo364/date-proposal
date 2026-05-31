import React, { useEffect } from 'react';
import './index.css';

function TodoItem(props) {
    useEffect(()=>{
        console.log("TodoItem component is mounted...")
    },[])
    const completedStyle = {
        fontStyle: "italic",
        textDecoration: "line-through",
        opacity: 0.7
    };
    return (
        <li className=' todo-item' onClick={() => props.handleToggle(props.todo.id)}>
            <input type="checkbox" checked={props.todo.isCompleted} onChange={() => props.handleToggle(props.todo.id)} />
            <span style={props.todo.isCompleted ? completedStyle : null}>{props.todo.text}</span>

        </li>
    );
}

export default TodoItem;
