import { useMemo } from "react";
import { useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let index = 0; index < iterationNumber; index++) {
        console.log('Ahi vamoss......');
    }
    return `${ iterationNumber } | numero de iteraciones realizadas`
}

export const MemoHook = () => {

  const { counter, increment } = useCounter(4000)
  const [ show, setshow ] = useState(true)

  const memorizeValue = useMemo( () => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />
        <h1>{ memorizeValue }</h1>
        <button
            className="btn btn-primary"
            onClick={() => increment()}
        >
            +1
        </button>
        <button
            className="btn btn-primary"
            onClick={() => setshow(!show)}
        >
            Show/Hide: { JSON.stringify(show) }
        </button>
    </>
  )
}
