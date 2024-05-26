import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, age, email } = action?.payload;
      const user = state.find((u) => u?.id === id);
      if (user) {
        (user.name = name), (user.email = email), (user.age = age);
      }
    },
    deleteUser: (state, action) => {
      const { id } = action?.payload;
      const user = state.find((u) => u?.id === id);
      if (user) {
        return state.filter((user) => user?.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
