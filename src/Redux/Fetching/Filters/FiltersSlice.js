import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "Filters",
  initialState: {
    name: "",
    category: [],
    minAmountMin: 0,
    maxAmountMin: 0,
    minAmountMax: 0,
    maxAmountMax: 0,
  },
  reducers: {
    addTags: (state, action) => {
      state.category = action.payload;
      console.log(state.category);
    },
    deleteTags: (state, action) => {
      state.category = state.category.filter((tag) => tag !== action.payload);
      console.log(state.category);
    },
    addMinMaxAmount: (state, action) => {
      if (action.payload.minOrMax === "min") {
        state.minAmountMin = action.payload.rangeMin;
        state.maxAmountMin = action.payload.rangeMax;
        console.log({
          minAmountMin: state.minAmountMin,
          maxAmountMin: state.maxAmountMin,
        });
      } else if (action.payload.minOrMax === "max") {
        state.minAmountMax = action.payload.rangeMin;
        state.maxAmountMax = action.payload.rangeMax;
        console.log({
          minAmountMax: state.minAmountMax,
          maxAmountMax: state.maxAmountMax,
        });
      }
    },
  },
});

export const { addTags, deleteTags, addMinMaxAmount } = FilterSlice.actions;
export default FilterSlice;
