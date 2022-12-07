import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  isAuth: false, //user по умолчанию не авторизирован
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
