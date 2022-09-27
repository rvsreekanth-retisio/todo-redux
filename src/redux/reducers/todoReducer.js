import * as actionTypes from '../actions/action-type'


export const todoReducer=(state=[],action)=>{
    switch(action.type){
        case actionTypes.ADDTODO:
            return[
                ...state,
                {
                todo:action.payload
                }
            ]
            
        
        default:
            return state   
    }
  }