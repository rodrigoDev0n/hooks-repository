
export const todoReducer = ( initialState = [], action ) => {
  switch ( action.type ) {
    case '[TODO] Add Todo':
        return [ ...initialState, action.payload ]
  
    case '[TODO] Remove Todo':
        return initialState.filter( t => t.id !== action.payload )

    case '[TODO] Toggle Todo':
        return initialState.map( t => {
          if (t.id === action.payload) {
            return{
              ...t,
              done: !t.done
            }
          }
          return t
        })

    default:
        return initialState;
  }
}
