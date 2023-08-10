import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const UserRealSlice = createSlice({
  name: "User Real",
  initialState: {
    fetchStatus: "",
  },
  reducers: {
    handlerStatus: (state, action) => {
      state.fetchStatus = action.payload;
    },
  },
});

export const { handlerStatus } = UserRealSlice.actions;

export default UserRealSlice;
