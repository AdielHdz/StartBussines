import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
/* import axios from "../../../utils/axiosConfig"; */
import axios from "axios";
export const postComment = createAsyncThunk("postComment", async (rating) => {
  console.log(rating);
  return await axios
    .post("/rating", rating)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message));
});

const RatingSlice = createSlice({
  name: "Rating",
  initialState: {
    postRating: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.postRating = action.payload;
    });
  },
});

export default RatingSlice;
