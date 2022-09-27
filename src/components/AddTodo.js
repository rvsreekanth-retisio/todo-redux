import React,{useState} from 'react'
import { addTodo } from '../redux/actions/action-creator'
import { useSelector,useDispatch } from 'react-redux'

export default function AddTodo(){
    const [state,setState] =useState('')
    const currentTask=useSelector(state=>state.todoReducer)
    console.log(currentTask)
    const dispatch=useDispatch()
 
    const hanldesubmit=(e)=>{
        e.preventDefault() 
        dispatch(addTodo(state))
        console.log(state)
    }

    return(
        <div>
            <form onSubmit={hanldesubmit}>
                <input type="text" name="todo" placeholder='addTask' onChange={(e)=>setState(e.target.value)}/>
                <button type="submit">AddTodo</button>
            </form>
        </div>
    )
}