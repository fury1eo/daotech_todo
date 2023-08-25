import React from 'react';
import './Header.css';
import TodoAdd from '../TodoAdd/TodoAdd';
import Filter from '../Filter/Filter';
import Counter from '../Counter/Counter';

const Header = ({ addFunc, value, filterFunc, countData }) => {
    return (
        <div className='header'>
            <Counter countData={countData}/>
            <Filter value={value} filterFunc={filterFunc}/>
            <TodoAdd addFunc={addFunc}/>
        </div>
    );
};

export default Header;