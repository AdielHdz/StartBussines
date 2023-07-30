import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosConfig";

export const getProjectById = createAsyncThunk("getProjectById", async (id) => {
  return await axios.get(`projects/${id}`).then((response) => response.data);
});

export const getProjects = createAsyncThunk("getProjects", async () => {
  try {
    const response = await axios.get(`http://localhost:3001/projects`);

    console.log("Datos recibidos de la API:", response.data);

    return response.data;
  } catch (error) {
    console.log(`Failed to get projects: ${error.message}`);
    return [];
  }
}
);

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
    })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.allProjects = action.payload;

      })
  },
});


export default ProjectSlice;
