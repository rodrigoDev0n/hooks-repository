import { memo } from "react"

export const Small = memo(({ value }) => {

  console.log('Este componente se esta redibujando 😭');

  return (
    <small>{ value }</small>
  )
})
