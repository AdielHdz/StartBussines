import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
/* import axios from "../../../utils/axiosConfig"; */
import axios from "axios";
export const postComment = createAsyncThunk("postComment", async (rating) => {
  return await axios
    .post("/rating", rating)
    .then((response) => console.log(response.data))
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
  },
  reducers: {
    saveRatingUser: (state, action) => {
      state.ratingUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.postRating = action.payload;
    });
  },
});
export const { saveRatingUser } = RatingSlice.actions;
export default RatingSlice;
