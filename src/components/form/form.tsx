import { useState } from "react"

type FormProps = {
    closeForm: (isVisible: boolean) => void
    addTodo: (text: string) => void
}

export function Form({closeForm, addTodo}: FormProps) {
    const [formData, setFormData] = useState('')

    const changeHandler = (evt: React.FormEvent<HTMLInputElement>) => {
        setFormData(evt.currentTarget.value.trim())
    }

    const addTodoHandler = (evt: React.FormEvent<HTMLButtonElement>) => {
        evt.preventDefault()
        addTodo(formData)
        setFormData('')
    }

    const closeHandler = () => {
        closeForm(true)
    }

    return (
        <form className="add-todo__form">
            <button className="close-button" type="button" onClick={closeHandler}>
                <i className="bi bi-x"></i>
            </button>
            <div className="text-input text-input--focus">
                <input className="input" value={formData} onChange={changeHandler}/>
            </div>
            <button className="button button--filled" onClick={addTodoHandler}>Add task</button>
        </form>
    )
}