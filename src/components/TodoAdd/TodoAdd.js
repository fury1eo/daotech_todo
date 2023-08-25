import React, { useState } from 'react';
import './TodoAdd.css';

const TodoAdd = ({ addFunc }) => {
    const [text, setText] = useState('');

    function addItem() {
        if (text && text.length <= 20)
            addFunc(text);
        
        setText('');
    }

    return (
        <div className='todoAdd'>
            <input placeholder='Напишите задачу...' type="text" value={text} className="todoAdd__input" onChange={e => setText(e.target.value)}/>
            <button className='todoAdd__btn' onClick={addItem}>Сохранить</button>
        </div>
    );
};

export default TodoAdd;