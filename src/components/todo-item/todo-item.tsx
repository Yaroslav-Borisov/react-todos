import { MouseEvent } from "react"
import { Todo } from "../../types"

type TodoItemProps = {
    todoItem: Todo
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

export function TodoItem({onToggle, onDelete, todoItem}: TodoItemProps) {
    const {id, text, completed} = todoItem
    const todoClassName = completed ? 'todo-item todo-item--done' : 'todo-item'

    const onToggleHandler = () => {
        onToggle(id)
    }

    const onDeleteHandler = (event: MouseEvent) => {
        event.stopPropagation()
        onDelete(id)
    }

    return (
        <li className={todoClassName} onClick={onToggleHandler}>
            <div className="todo-item__status">
                <i className="bi bi-check2"></i>
            </div>
            <span className="todo-item__text">{text}</span>
            <button className="todo-item__remove-button" onClick={onDeleteHandler}>
                <i className="bi bi-trash3"></i>
            </button>
        </li>
    )
}