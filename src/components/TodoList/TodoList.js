import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ data, deleteFunc, completeFunc }) => {

    return (
        <div className='todoList'>
            {data.length > 0 
                ? data.map(item => <TodoItem id={item.id} key={item.id} text={item.text} complete={item.complete} deleteFunc={deleteFunc} completeFunc={completeFunc}/>) 
                : <div className='todoList__none'>Дел еще нет...</div>
            }
        </div>
    );
};

export default TodoList;