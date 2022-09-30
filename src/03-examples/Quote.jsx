import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({quote, author}) => {

  const pRef = useRef()
  const [boxSize, setboxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect() 
    setboxSize({width, height})
  }, [quote])

  return (
    <>
        <blockquote
          style={{ display: 'flex' }} 
          className="blockquote text-end"
        >
            <p ref={pRef} className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
