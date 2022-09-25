import React from "react";
import TodoListItem from './todoListItem';
import './todoList.css';

const TodoList = ({ todos }) => {
    const elements = todos.map(item => {
        const { id, ...itemProps} = item;
        return (
            <li key={item.id} className='list-group-item'>
                <TodoListItem { ...itemProps }/>
            </li>
        )
    })
    return (
        <ul className='list-group'>
            { elements }
        </ul>
    )
};

export default TodoList;