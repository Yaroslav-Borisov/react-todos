import { MouseEvent } from "react"
import { Todo } from "../../types"

type TodoItemProps = {
    todoItem: Todo
    onToggle: (Todo: Todo) => void
    onDelete: (Todo: Todo) => void
}

export function TodoItem({onToggle, onDelete, todoItem}: TodoItemProps) {
    const {id, title, completed} = todoItem
    const todoClassName = completed ? 'todo-item todo-item--done' : 'todo-item'

    const onToggleHandler = () => {
        onToggle({...todoItem, completed: !completed})
    }

    const onDeleteHandler = (event: MouseEvent) => {
        event.stopPropagation()
        onDelete(todoItem)
    }

    return (
        <li className={todoClassName} onClick={onToggleHandler}>
            <div className="todo-item__status">
                <i className="bi bi-check2"></i>
            </div>
            <span className="todo-item__text">{title}</span>
            <button className="todo-item__remove-button" onClick={onDeleteHandler}>
                <i className="bi bi-trash3"></i>
            </button>
        </li>
    )
}