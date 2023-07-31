import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const order = createAsyncThunk("order", async (filters) => {
  return await axios
    .put("/projects/filter", filters)
    .then((response) => response.data);
});

const FilterSlice = createSlice({
  name: "Filters",
  initialState: {
    name: "",
    category: [],
    minAmountMin: 0,
    maxAmountMin: 0,
    minAmountMax: 0,
    maxAmountMax: 0,
    order: "",
    attribute: "rating",
    typeAmount: "min",
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
      console.log(action.payload);
      if (action.payload.minOrMax === "Min") {
        state.minAmountMin = action.payload.rangeMin;
        state.maxAmountMin = action.payload.rangeMax;
      } else if (action.payload.minOrMax === "Max") {
        state.minAmountMax = action.payload.rangeMin;
        state.maxAmountMax = action.payload.rangeMax;
      }
    },
    ordered: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { addTags, deleteTags, addMinMaxAmount, ordered } =
  FilterSlice.actions;
export default FilterSlice;
