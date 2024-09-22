import React from 'react'

export default function TodoList() {
    let todos = [
        'learning code',
        'studyign uwu',
        'weebing around',
        'stay hydrated'
    ]
    return (
            <ul>
                {todos.map((todo, todoIndex) => {
                    return (
                        <li key={todoIndex}>{todo}
                        <i></i>
                        </li>
                    )
                })}
            </ul>
        )
}
