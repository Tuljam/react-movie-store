import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  isAuth: boolean;
  error?: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  isAuth: false, //user по умолчанию не авторизирован - или undefined???
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
    },
    // изменение значения имени юзера
    setUserName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },

    setAuthByUser: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },
});

export default userSlice.reducer;

export const { setUserEmail, setUserName, setAuthByUser } = userSlice.actions;
