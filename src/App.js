import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

function App() {
    const [todoItems, setTodoItems] = useState([]);
    const [filterTodoItems, setFilterTodoItems] = useState(todoItems);
    const [id, setId] = useState(0);
    const [filter, setFilter] = useState(0);
    const [countData, setCountData] = useState({
        done: 0,
        inProgress: 0
    });

    useEffect(() => {
        if (filter === 0) {
            setFilterTodoItems(todoItems)
        }
        else {
            setFilterTodoItems(todoItems.filter(item => item.complete === filter))
        }
        let doneCount = todoItems.filter(item => item.complete === 2).reduce((sum, item) => sum + 1, 0)
        let progressCount = todoItems.filter(item => item.complete === 1).reduce((sum, item) => sum + 1, 0)

        setCountData({done: doneCount, inProgress: progressCount})
        
    }, [todoItems, filter])

    function deleteItem(i) {
        setTodoItems(todoItems.filter(item => item.id !== i));
    }

    function addItem(text) {
        setTodoItems([...todoItems, {'id': id, 'text': text, complete: 1}]);
        filterItems(filter)
        setId(id + 1);
    }

    function completeItem(i) {
        setTodoItems(todoItems.map(item => {
          if (item.id === i)
            item.complete = item.complete === 1 ? 2 : 1;
          return item
        }))
    }

    function filterItems(filter) {
        setFilter(filter);
    }

    return (
        <div className="App">
            <div className="title">Список дел</div>
            <Header addFunc={addItem} value={filter} filterFunc={filterItems} countData={countData}/>
            <TodoList data={filterTodoItems} deleteFunc={deleteItem} completeFunc={completeItem}  />
        </div>
    );
}

export default App;
