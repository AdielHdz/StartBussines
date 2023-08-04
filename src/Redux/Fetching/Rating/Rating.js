import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
/* import axios from "../../../utils/axiosConfig"; */
import axios from "axios";
export const postComment = createAsyncThunk("postComment", async (rating) => {
  return await axios
    .post("/rating", rating)
    .then((response) => response.data)
    .catch((error) => console.log(error.message));
});

export const putComment = createAsyncThunk("putComment", async (rating) => {
  const { points, comments } = rating;
  console.log(rating);
  return await axios
    .put(`/rating/${rating.id}`, { points, comments })
    .then((response) => response.data)
    .catch((error) => console.log(error.message));
});

const RatingSlice = createSlice({
  name: "Rating",
  initialState: {
    postRating: {},
    ratingUser: {},
    putSucces: "",
    isLoading: false,
  },
  reducers: {
    saveRatingUser: (state, action) => {
      state.ratingUser = action.payload;
    },
    activateIsLoading: (state) => {
      state.isLoading = true;
    },
    setPutSucces: (state) => {
      state.putSucces = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.postRating = action.payload;
    });
    builder.addCase(putComment.fulfilled, (state, action) => {
      state.putSucces = action.payload.updated.comments;

      state.isLoading = false;
    });
  },
});
export const { saveRatingUser, activateIsLoading, setPutSucces } =
  RatingSlice.actions;
export default RatingSlice;
