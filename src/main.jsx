import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWhitCustomHook } from './01-useState/CounterWhitCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook' */
/* import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks' */
/* import { FocusScreen } from './04-useRef/FocusScreen' */
/* import { Layout } from './05-useLayoutEfect/Layout' */
/* import { Memorize } from './06-memos/Memorize' */
/* import { MemoHook } from './06-memos/MemoHook' */
/* import { CallbackHook } from './06-memos/CallbackHook' */
// import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'
import './08-useReducer/intro-reducer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TodoApp />
  //</React.StrictMode>
)
