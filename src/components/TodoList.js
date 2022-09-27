import React from 'react'
import { useSelector,useDispatch} from 'react-redux'

export default function TodoList(){
    const tasks=useSelector(state=>state.todoReducer)
    return(
        <div>
          <ul>
             <ol>
              {tasks.map((task,id)=>{
                return  (
                    <li key={id}>{task.todo}</li>
                )
               })}
              </ol> 
          </ul>
           
        </div>
    )
}