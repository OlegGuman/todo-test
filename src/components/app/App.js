import React from 'react';
import AppHeader from '../appHeader';
import ItemStatusFilter from '../itemStatusFilter';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList';
import './app.css';

const App = () => {
  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Save App', important: true, id: 2},
    {label: 'Create Item', important: false, id: 3},
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>


  )
}

export default App;