import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { moviesApi, transformMovies } from "services";
import { IMovie, ResponseAPI } from "types";

export const fetchAllMovies = createAsyncThunk<ResponseAPI, string>(
  "movies/fetchAllMovies",
  async (params) => {
    return await moviesApi.getSearchMovies(params);
  },
);

interface IMovieCardsState {
  movies: IMovie[];
  // movies: IMovieDetailsAPI;
  isLoading: boolean;
  error: null | string;
}
const initialState: IMovieCardsState = {
  movies: [],
  isLoading: false,
  error: null,
};
const movieCardSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllMovies.pending, (state) => {
      state.isLoading = true;
    });
    // //////////////  any - исправить!!!!!
    builder.addCase(fetchAllMovies.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchAllMovies.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default movieCardSlice.reducer;
