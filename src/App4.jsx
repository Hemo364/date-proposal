import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import './TodoStyles.css'; // Import the CSS file
import { useState } from 'react';
import React from 'react';

function App4() {
    const [todos, setTodos] = useState([])
    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text: text, isCompleted: false }
        setTodos([...todos, newTodo])
    }
    const handleToggle = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    };
    return (
        <div className='todo-app-container'>
            <h1>Hesam's todo list</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} />
            })}
        </div>
    );
}

export default App4;
