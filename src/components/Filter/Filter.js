import React from 'react';
import './Filter.css';

const Filter = ({ value, filterFunc }) => {
    const categories = ['Все', 'В процессе', 'Выполненные'];

    return (
        <div className='filter'>
            {categories.map((category, i) =>
                <button className={`filter__btn ${value === i ? 'active' : ''}`} key={i} onClick={() => filterFunc(i)}>{category}</button>
            )}
        </div>
    );
};

export default Filter;