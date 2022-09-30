import { useCounter } from "../hooks/useCounter"

export const CounterWhitCustomHook = () => {

  const {counter, increment, reset, decrement} = useCounter()

  return (
    <>
        <h1>Counter whith Custom hook: {counter}</h1>
        <hr />
        <button onClick={() => increment(2)} className="btn btn-primary">+1</button>
        <button onClick={reset} className="btn btn-primary">reset</button>
        <button onClick={() => decrement(2)} className="btn btn-primary">-1</button>
    </>
  )
}
