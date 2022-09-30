import { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  
  const [formState, setformState] = useState({
    username: 'rodrigoDevon',
    email: 'rpobleteparedes@gmail.com',
  })

  const {username, email} = formState

  const onInputChange = ({target}) => {
    const {name, value} = target
    setformState(
        {
            ...formState,
            [ name ]: value
        }
    )
  }

  useEffect(() => {
    /* console.log('useEffect se llamo') */
  }, [])

  useEffect(() => {
    /* console.log('formState cambio'); */
  }, [formState])
  
  useEffect(() => {
    /* console.log('email cambio') */
  }, [email])
  
  

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type='text'
            className='form-control'
            placeholder='Username'
            name='username'
            onChange={onInputChange}
        />
        <input 
            type='email'
            className='form-control mt-2'
            placeholder='Email'
            name='email'
            onChange={onInputChange}
        />
        {
          (username === 'rodrigoDevon') && <Message />
        }
    </>
  )
}
