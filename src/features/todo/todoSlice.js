import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        // self
        // updateTodo:(state,action)=>{
        //     const upTodo={
        //         id:action.payload,
        //         text:action.payload
        //     }
        //     const exisTodo=state.find(todo=>todo.id==upTodo.id);
        //     if(exisTodo){
        //         exisTodo.text=upTodo.text;
        //     }
        // }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer