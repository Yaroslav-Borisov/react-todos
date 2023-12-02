import { Todo } from "../../types"
import { TodoItem } from "../todo-item/todo-item"

type TodoListProps = {
    todos: Todo[]
    onToggle: (todo: Todo) => void
    onDelete: (todo: Todo) => void
}

export function TodoList({todos, onToggle, onDelete}: TodoListProps) {
    return (
        <ul className="todo-list">
            {todos.map(todo => <TodoItem todoItem={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id}/>)}
        </ul>
    )
}