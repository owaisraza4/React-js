import { createSlice } from "@reduxjs/toolkit";


const initial_state = {
    isLoggedIn: true,
    loading: true,
    user_data: {},
}


const user_data_slice = createSlice({
    name:'user-data',
    initialState:initial_state,
    reducers: {
        set_user_auth: (state, actions) => {
          console.log(actions);
          // state.isLoggedIn = actions.payload.loggedIn;
          // state.loading = actions.payload.loading;
          state.isLoggedIn = actions.payload;
          state.loading = false;
        },
      },
})

export const { set_user_auth } = user_data_slice.actions;

export default user_data_slice.reducer