import { useState } from "react"

export const useCounter = (initialValue=1) => {

    const [counter , setcounter ] = useState(initialValue)

    const increment = () => {
        setcounter(
            counter + 1
        )
    }

    const reset = () => {
        setcounter(
            initialValue
        )
    }

    const decrement = (value=2) => {
        if(counter === 0) return
        setcounter(
            counter - value
        )
    }


    return {
        counter,
        increment,
        reset,
        decrement,
    }
}