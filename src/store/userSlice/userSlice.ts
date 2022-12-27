import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logInEmailAndPassword, logout, registerEmailAndPassword } from "components/firebase";
import { IUserLoginRequest, IUserRegisterRequest } from "components/firebase/types";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";

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
export const registerUser = createAsyncThunk<
  { name: string; email: string; uid: string },
  IUserRegisterRequest,
  { rejectValue: string }
>("users/register", async (payload, { rejectWithValue }) => {
  try {
    const response = await registerEmailAndPassword(payload);
    return response;
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case AuthErrorCodes.EMAIL_EXISTS:
          return rejectWithValue("Invalid password");
      }
    }

    return rejectWithValue("Unknown error");
  }
});

export const loginUser = createAsyncThunk<void, IUserLoginRequest, { rejectValue: string }>(
  "users/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await logInEmailAndPassword(payload);
      return response;
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case AuthErrorCodes.INVALID_PASSWORD:
            return rejectWithValue("Invalid password");
        }
      }

      return rejectWithValue("Error");
    }
  },
);

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "users/logout",
  async (payload, { rejectWithValue }) => {
    try {
      await logout();
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);
export default userSlice.reducer;

export const { setUserEmail, setUserName, setAuthByUser } = userSlice.actions;
