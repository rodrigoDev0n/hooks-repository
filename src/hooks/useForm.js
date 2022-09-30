import { useState } from "react"

export const useForm = (initialForm={}) => {
    /* username: '',
    email: '',
    password: '' */

    const [formState, setformState] = useState(initialForm)
    
    const onInputChange = ({target}) => {
        const {name, value} = target
        setformState(
            {
                ...formState,
                [ name ]: value
            }
        )
    }

    // Crear una función que resetee todo el formulario

    const onResetForm = () => {
        setformState(initialForm)
    }


    return {
        ...formState,
        onInputChange,
        onResetForm,

    }

}
