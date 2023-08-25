import React from 'react';
import Delete from '../../images/delete.png';
import './TodoItem.css';

const TodoItem = ({ id, text, complete, deleteFunc, completeFunc }) => {

    return (
        <div className='todoItem' style={complete === 2 ? {backgroundColor: '#1ec41e'} : {backgroundColor: '#ffad4a'}}>
            <div className="todoItem__text" onClick={() => completeFunc(id)}>{text}</div>
            <div className="todoItem__status">{complete === 2 ? 'Выполнено' : 'В процессе'}</div>
            <div className="todoItem__delete">
                <img src={Delete} alt="delete" onClick={() => deleteFunc(id)}/>
            </div>
        </div>
    );
};

export default TodoItem;