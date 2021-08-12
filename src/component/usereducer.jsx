import { useReducer, useState } from "react"

const initState = {
    todo: []
}

const constrain = {
    ADD_TODO: "ADD_TODO",
    
}

const reducer = (state,action) => {
    switch (action.type) {
        case constrain.ADD_TODO: {
            return {
                ...state,
                todo: [...state.todo , action.payload]
            }
        }
          
        default: {
            return state;
            }
    }
}

export function Count() {
    const [state, dispatch] = useReducer(reducer, initState);
    const [data,setData]=useState("")
    console.log(state)
    const handleAdd = () => {
        dispatch({ type: constrain.ADD_TODO, payload: data })
        console.log(state)
    }
    
    return <div>
        <h1>Todo</h1>
        <input type="text" onChange={ (e)=>{setData(e.target.value)}}/>
        <button onClick={handleAdd}>Add</button>

        <h1>Todo list</h1>
        {state.todo.map(e => <p key={e.length}>Todo: { e}</p>)}
        
        
    </div>
}