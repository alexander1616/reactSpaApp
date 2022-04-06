import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const dataSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      saveTodo: (state, action) => {
          state.todoList.push(action.payload)
      }
  }
});

export const { saveTodo } = dataSlice.actions;

export default dataSlice.reducer;