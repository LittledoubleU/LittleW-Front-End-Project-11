import { useState } from "react";

// todoinput.jsx
export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props;

    return (
        <header>
            <h1>To do List</h1>
            <div className="todoInput"><input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo... " type="text" name="" id="" />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button></div>
        </header>
    );
}
