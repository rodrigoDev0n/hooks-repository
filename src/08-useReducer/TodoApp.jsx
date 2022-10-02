import { TodoAdd, TodoList  } from './components/components';
import { useTodoApp } from '../hooks';

export const TodoApp = () => {
 
  const { todo, handleNewTodo, handleDeleteTodo, handleToggleTodo, completed } = useTodoApp()

  return(
    <>
      <h1>TodoApp: {todo.length}, <small>pendientes: {completed} </small></h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          {/* TodoList */}
          <TodoList 
            todos={ todo } 
            onDelete={ handleDeleteTodo } 
            onToggleTodo={ handleToggleTodo }
          />
          {/* EndTodoList */}
        </div>

        <div className='col-5'>
          {/* TodoAdd */}
          <TodoAdd onNewTodo={handleNewTodo} />
          {/* TodoAdd */}
        </div>

      </div>

    </>
  )
}

