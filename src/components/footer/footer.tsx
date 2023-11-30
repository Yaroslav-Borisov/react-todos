import { Todo } from "../../types"

type FooterProps = {
    todos: Todo[]
}

export function Footer({todos}: FooterProps) {
    const activeTodosCount = todos.filter((todo) => todo.completed === false).length
    const completedTodosCount = todos.length - activeTodosCount


    return (
        <footer className="app-footer">{activeTodosCount} more to do, {completedTodosCount} done</footer>
    )
}