import React from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

export const Padre = () => {
    
    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = ( num ) => {
        setValor( valor + num )
    }
  
    const newIncrement = useCallback(
      (num) => {
        setValor( (value) => value + num )
      },
      [],
    )
    
/*     useEffect(() => {
        newIncrement
    }, [valor]) */
    

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ newIncrement }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
