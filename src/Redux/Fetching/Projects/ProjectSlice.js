import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosConfig";

export const getProjectById = createAsyncThunk("getProjectById", async (id) => {
  return await axios.get(`projects/${id}`).then((response) => response.data);
});

const ProjectSlice = createSlice({
  name: "Project",
  initialState: {
    allProjects: [],
    project: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjectById.fulfilled, (state, action) => {
      state.project = action.payload;
      console.log(action.payload);
    });
  },
});

export default ProjectSlice;
