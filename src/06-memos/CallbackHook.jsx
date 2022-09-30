import { useCallback } from "react"
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

  const [counter, setcounter] = useState(10)

  const increment = useCallback(
    (val) => {
      setcounter( (value) => value + val )
    },
    [],
  )
  
  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />
        <ShowIncrement increment={ increment } />
    </>
  )
}
