import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/header/header';
import { Filters } from './components/filters/filters';
import { TodoList } from './components/todo-list/todo-list';
import { Footer } from './components/footer/footer';
import { FilterType, Todo } from './types';
import { Empty } from './components/empty/empty';
import { Form } from './components/form/form';
import axios from 'axios';
import { Api } from './api';

function App() {
    const [filter, setFilter] = useState(FilterType.All)
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState(false)

    async function getTodos() {
        setLoading(true)
        const response = await Api.getTodos()
        setTodos(response)
        setLoading(false)
    }

    async function updateTodo(todo: Todo) {
        const updatedTodo = await Api.updateTodo(todo)

        const todoIndex = todos.findIndex(todo => todo.id === updatedTodo.id)
        const updatedTodos = [...todos.slice(0, todoIndex), updatedTodo, ...todos.slice(todoIndex + 1)]

        setTodos(updatedTodos)
    }

    async function deleteTodo(deletingTodo: Todo) {
        await Api.deleteTodo(deletingTodo.id as number)

        const todoIndex = todos.findIndex(todo => todo.id === deletingTodo.id)
        const updatedTodos = [...todos.slice(0, todoIndex), ...todos.slice(todoIndex + 1)]

        setTodos(updatedTodos)
    }

    async function addTodo(newTodo: Todo)  {

        const response = await Api.addTodo(newTodo)
        const updatedTodos = [...todos, response]

        setTodos(updatedTodos)
    }

    useEffect(() => {
        getTodos()
    }, [])

    const filteredTodos = useMemo(() => {
        switch (filter) {
            case (FilterType.All):
                return todos
            case (FilterType.Active):
                return todos.filter((todo) => todo.completed === false)
            case (FilterType.Done):
                return todos.filter((todo) => todo.completed === true)
        }
    }, [todos, filter])


    return (
        <div className="app">
            <Header />
            <Filters filter={filter} onChange={setFilter} />
            {loading ? <main className="app-main">Loading...</main> :
            <main className="app-main">
                {todos.length === 0 ? <Empty /> : <TodoList todos={filteredTodos} onToggle={updateTodo} onDelete={deleteTodo} />}
                <Form addTodo={addTodo} />
            </main>}
            <Footer todos={todos} />
        </div>
    );
}

export default App;
