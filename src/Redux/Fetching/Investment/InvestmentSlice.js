import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const investInProject = createAsyncThunk(
  "investInProject",
  async (investBody) => {
    console.log(investBody);
    return await axios
      .post("/payment/create-order", investBody)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
);

const InvestmentSlice = createSlice({
  name: "Investment",
  initialState: {
    invest: {},
    fetchStatus: "",
  },
  reducers: {
    activeFetchStatus: (state) => {
      state.fetchStatus = "pending";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(investInProject.fulfilled, (state, action) => {
      state.invest = action.payload;
      state.fetchStatus = "success";
      window.location.href = action.payload.response.init_point;
    });
  },
});

export const { activeFetchStatus } = InvestmentSlice.actions;

export default InvestmentSlice;
