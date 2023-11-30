import { Todo } from "../../types"
import { TodoItem } from "../todo/todo"

type TodoListProps = {
    todos: Todo[]
}

export function TodoList({todos}: TodoListProps) {
    return (
        <ul className="todo-list">
            {todos.map(todo => <TodoItem todoItem={todo}/>)}
        </ul>
    )
}