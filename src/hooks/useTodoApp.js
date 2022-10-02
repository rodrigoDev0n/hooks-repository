import { useReducer, useEffect, useState } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

export const useTodoApp = () => {

    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('todo')) || []
    }

    const [completed, setcompleted] = useState(0)
    const [todo, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        completedTodos(todo)
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }

    const completedTodos = (todo) => {
        const uncompletedTodos = todo.filter(t => !t.done)
        setcompleted(uncompletedTodos.length)
    }

    return {
        todo,
        handleNewTodo,
        handleDeleteTodo,
        handleDeleteTodo,
        handleToggleTodo,
        completed,
    }
}
