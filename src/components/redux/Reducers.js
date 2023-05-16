import {createReducer} from "@reduxjs/toolkit"

const initialstate={
    Time:"",
    renderTime: true,
    slot1:0,
    slot2:"",
    slot3:"",
    slot4:"",
    slot5:"",
    slot6:""
}

export const Customreducer=createReducer(initialstate,{

    Time:(state,action)=>{
        state.Time=action.payload
    },
    renderSelectTimeafterBook:(state,action)=>{
        state.renderTime=action.payload
    },
    slot1:(state,action)=>{
        state.slot1=action.payload
    },
    slot2:(state,action)=>{
        state.slot2=action.payload
    },slot3:(state,action)=>{
        state.slot3=action.payload
    },slot4:(state,action)=>{
        state.slot4=action.payload
    },slot5:(state,action)=>{
        state.slot5=action.payload
    },
    slot6:(state,action)=>{
        state.slot6=action.payload
    }
})