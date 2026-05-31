import React, { useState } from 'react';
function TodoForm(prop) {
    const [text,setText]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        prop.addTodo(text);
        setText('')
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input  type="text" dir='rtl' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;
