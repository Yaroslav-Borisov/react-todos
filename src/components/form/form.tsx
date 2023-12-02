import React, { useState } from 'react';
import { Todo } from '../../types';

type FormProps = {
    addTodo: (newTodo: Todo) => void
}

export function Form({ addTodo }: FormProps) {
    const [isVisible, setVisible] = useState(false)
    const [formData, setFormData] = useState('')

    const changeHandler = (evt: React.FormEvent<HTMLInputElement>) => {
        setFormData(evt.currentTarget.value.trim())
    }

    const addTodoHandler = (evt: React.FormEvent<HTMLButtonElement>) => {
        evt.preventDefault()
        const newTodo = {
            title: formData,
            completed: false
        }
        addTodo(newTodo)
        setFormData('')
    }

    const showFormHandler = () => {
        setVisible(true)
    }

    const closeFormHandler = () => {
        setVisible(false)
    }
    

    return (<>
        {isVisible ?
            <form className="add-todo__form">
                <button className="close-button" type="button" onClick={closeFormHandler}>
                    <i className="bi bi-x"></i>
                </button>
                <div className="text-input text-input--focus">
                    <input className="input" value={formData} onChange={changeHandler} />
                </div>
                <button className="button button--filled" onClick={addTodoHandler}>Add task</button>
            </form> 
            :
            <section className="add-todo">
                <button className="add-todo__show-form-button" onClick={showFormHandler}>
                    <i className="bi bi-plus-lg"></i>
                </button>
            </section>}
    </>)
}