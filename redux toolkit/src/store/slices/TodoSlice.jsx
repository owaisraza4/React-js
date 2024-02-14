import { createSlice } from "@reduxjs/toolkit";
import { todosData } from "../../utils/TodosData";

const initialState = {
    todos: todosData,
};
const TodoSlice = createSlice({
    initialState: initialState,
    name: "Todo_Data",
    reducers:{
        completeTodoAction: (state, action) => {
            const { payload } = action;
            state.todos[payload].isCompleted = true;
            console.log("payload",action)
          },
    }
})

export default TodoSlice.reducer
export const {completeTodoAction} = TodoSlice.actions