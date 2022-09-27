import * as actionTypes from './action-type'

export const addTodo=(todo)=>{
    return{
        type:actionTypes.ADDTODO,
        payload:todo
    }  
}


