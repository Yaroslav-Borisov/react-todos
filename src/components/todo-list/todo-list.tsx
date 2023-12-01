import { Todo } from "../../types"
import { TodoItem } from "../todo-item/todo-item"

type TodoListProps = {
    todos: Todo[]
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

export function TodoList({todos, onToggle, onDelete}: TodoListProps) {
    return (
        <ul className="todo-list">
            {todos.map(todo => <TodoItem todoItem={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id}/>)}
        </ul>
    )
}