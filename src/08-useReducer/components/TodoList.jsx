import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDelete, onToggleTodo }) => {

    return (
        <>
            <ul className='list-group'>
                {
                    todos.map(e => (
                        <TodoItem 
                            key={e.id} 
                            todo={e} 
                            onDeleteTodo={onDelete} 
                            onToggleTodo={onToggleTodo}
                        />
                    ))
                }
            </ul>
        </>
    )
}
