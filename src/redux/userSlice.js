// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    id: "",
    email: "",
    role: "",
    wallatBalance: "",
    userName: "",
    SECRET: "fsfdccf7&hbbxbh",

  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    },
    setName(state, action) {
      state.userName = action.payload;
      console.log("test 1", state.userName);
    },
    setEmail(state, action) {
      state.email = action.payload;
      console.log("test 1", state.email);
    },
  },
});

export default userSlice;
export const { setToken,setEmail, setId, setName } = userSlice.actions;
