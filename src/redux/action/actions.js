import { ADD, RESET, SUB } from "./actionConstans"

export const addByOne = ()=>{
    return {
        type:ADD,
        payload:1
    }
}

export const subByOne = ()=>{
    return{
        type:SUB,
        payload:1
    }
}

export const reset = ()=>{
    return{
        type:RESET
    }
}