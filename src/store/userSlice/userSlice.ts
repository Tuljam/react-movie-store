import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Lozhka",
  email: "Vilka",
  isAuth: false, //user по умолчанию не авторизирован
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // изменение значения авторизации юзера с true на false
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export default userSlice.reducer;

export const { toggleAuth } = userSlice.actions;
