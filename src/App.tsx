import React from 'react';
import { Header } from './components/header/header';
import { Filters } from './components/filters/filters';
import { TodoList } from './components/todo-list/todo-list';
import { AddTodo } from './components/add-todo/add-todo';
import { Footer } from './components/footer/footer';
import { todos } from './mocks/todos';

function App() {
    return (
        <div className="app">
            <Header />
            <Filters />
            <main className="app-main">
                <TodoList todos={todos}/>
                <AddTodo />
            </main>
            <Footer todos={todos}/>
        </div>
    );
}

export default App;
