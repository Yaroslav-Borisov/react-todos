import React, { useState, useMemo } from 'react';
import { Header } from './components/header/header';
import { Filters } from './components/filters/filters';
import { TodoList } from './components/todo-list/todo-list';
import { AddTodo } from './components/add-todo/add-todo';
import { Footer } from './components/footer/footer';
import { todos as mockTodos } from './mocks/todos';
import { FilterType, Todo } from './types';
import { Form } from './components/form/form';
import { Empty } from './components/empty/empty';

function App() {
    const [todos, setTodos] = useState(mockTodos)
    const [filter, setFilter] = useState(FilterType.All)
    const [form, setForm] = useState(false)

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


    const onToggle = (id: number) => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        const todo = todos[todoIndex]

        const updatedTodo: Todo = {
            ...todo,
            completed: !todo.completed
        }

        const updatedTodos = [...todos.slice(0, todoIndex), updatedTodo, ...todos.slice(todoIndex + 1)]

        setTodos(updatedTodos)
    }

    const onDelete = (id: number) => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        const updatedTodos = [...todos.slice(0, todoIndex), ...todos.slice(todoIndex + 1)]

        setTodos(updatedTodos)
    }

    const showForm = (isVisible: boolean) => {
        setForm(isVisible)
    }

    const closeForm = (isVisible: boolean) => {
        setForm(!isVisible)
    }

    const addTodo = (text: string) => {
        console.log(text)

        const newTodo: Todo = {
            id: Number(new Date()),
            text: text,
            completed: false
        }

        const updatedTodos = [...todos, newTodo]
        setTodos(updatedTodos)
    }

    return (
        <div className="app">
            <Header />
            <Filters filter={filter} onChange={setFilter} />
            <main className="app-main">
                {!form && todos.length === 0 ? <Empty /> : <TodoList todos={filteredTodos} onToggle={onToggle} onDelete={onDelete} />}
                {form ? <Form closeForm={closeForm} addTodo={addTodo} /> : <AddTodo showForm={showForm}/>}
            </main>
            <Footer todos={todos} />
        </div>
    );
}

export default App;
