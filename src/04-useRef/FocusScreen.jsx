import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef()

  const onClick = () => {
    inputRef.current.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputRef} className="form-control" type="text" name="" placeholder="Ingrese su nombre" />
      <button onClick={onClick} className="btn btn-primary mt-2">Set Focus</button>  
    </>
  )
}
