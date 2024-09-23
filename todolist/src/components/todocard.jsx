import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo} = props
    return (
        <li className='todoItem'>
            <div className='actionContainer'>
                { children }
                <div className='icon'>
                    <button onClick={() => {
                        handleEditTodo(index)
                    }}>
                    <img src="../public/pencil.svg" alt="pencil icon" />
                    </button>
                    <button onClick={() => {
                        handleDeleteTodo(index)
                    }}>
                    <img src="../public/trash.svg" alt="pencil icon" />
                    </button>
                </div>
            </div>
        </li>
    )
}
