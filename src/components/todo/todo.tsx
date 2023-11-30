import { Todo } from "../../types"

type TodoItemProps = {
    todoItem: Todo
}

export function TodoItem({todoItem}: TodoItemProps) {
    const {text, completed} = todoItem
    const todoClassName = completed ? 'todo-item todo-item--done' : 'todo-item'

    return (
        <li className={todoClassName}>
            <div className="todo-item__status">
                <i className="bi bi-check2"></i>
            </div>
            <span className="todo-item__text">{text}</span>
            <button className="todo-item__remove-button">
                <i className="bi bi-trash3"></i>
            </button>
        </li>
    )
}