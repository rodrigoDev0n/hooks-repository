import { useState } from "react"
import { version } from "react-dom";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
    
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })

    const onFormSubmit = (event) => {
        event.preventDefault()
        if(description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo(newTodo)
        onResetForm()
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={onFormSubmit}>
                <input
                    onChange={onInputChange}
                    type="text"
                    name="description"
                    value={description}
                    placeholder='¿Que hay que hacer?'
                    className='form-control'
                />

                <button
                    className='btn btn-outline-primary mt-1'
                    type='submit'
                >Agregar
                </button>
            </form>
        </>
    )
}
