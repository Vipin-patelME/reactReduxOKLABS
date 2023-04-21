import { ADD, RESET, SUB } from "../action/actionConstans";

const initialState = {
    value:99
}

export const countReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD:
            return{
                ...state,
                value:state.value + action.payload
                
            }
        case SUB:
            return{
                ...state,
                value:state.value - action.payload
            }
        case RESET:
            return{
                ...state,
                value:99
            }
        default:
            return state
    }
}