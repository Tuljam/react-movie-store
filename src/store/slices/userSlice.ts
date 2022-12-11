import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  isAuth: boolean;
}

const initialState: UserState = {
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
    // изменение значения имени юзера
    setUserName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { toggleAuth, setUserName } = userSlice.actions;
