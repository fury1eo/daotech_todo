import React from 'react';
import './Counter.css';

const Counter = ({ countData }) => {
    return (
        <div className='counter'>
            <div className="counter__info">Выполнено: {countData.done}</div>
            <div className="counter__info">В процессе: {countData.inProgress}</div>
        </div>
    );
};

export default Counter;