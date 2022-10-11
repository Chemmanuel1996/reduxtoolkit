import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';


export const todostore = createSlice({
    name:'todos',
    initialState:[],
    reducers :{
        addToDo : (state, action) =>{
            const todo  = {
                id: nanoid(),
                title :  action.payload.title,
                completed: false,
            }
            state.push(todo);
        },
        toggleReducer : (state,action) => {
           const index = state.findIndex((todo) => todo.id === action.payload.id)
            state[index].completed = action.payload.completed
        },
        deleteReducer : (state, action) =>{
            return state.filter((todo) => todo.id !== action.payload.id)
        }
    }
})

export const {addToDo, toggleReducer, deleteReducer} =  todostore.actions
export default todostore.reducer
