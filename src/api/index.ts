import axios from "axios"
import { Todo } from "../types"

export class Api {
    static getTodos = async () => {
        const {data} = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', { params: { _limit: 4 } })
        return data
    }

    static updateTodo = async (todo: Todo) => {
        const {data} = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
        return data
    }

    static deleteTodo = async (id: number) => {
        const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return data
    }

    static addTodo = async (todo: Todo) => {
        const {data} = await axios.post(`https://jsonplaceholder.typicode.com/todos/`, todo)
        return data
    }

}