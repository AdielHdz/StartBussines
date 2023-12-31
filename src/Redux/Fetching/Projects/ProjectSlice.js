import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosConfig";

export const getProjectById = createAsyncThunk("getProjectById", async (id) => {
  return await axios.get(`/projects/${id}`).then((response) => response.data);
});

export const fetchArticlesData = createAsyncThunk(
  "fetchArticlesData",
  async (filters) => {
    console.log(filters);
    try {
      const response = await fetch(
        "https://deal-up-api.onrender.com/projects/filter",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters),
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data from API:", error);
      return [{ error: error.message }];
    }
  }
);

export const getProjects = createAsyncThunk("getProjects", async () => {
  try {
    const response = await axios.get(`/projects`);

    return response.data;
  } catch (error) {
    console.log(`Failed to get projects: ${error.message}`);
    return [];
  }
});

export const getTopProjects = createAsyncThunk("getTopProjects", async () => {
  try {
    const response = await axios.get(`/projects/filter`);
    
    return response.data;
  } catch (error) {
    console.log(`Failed to get projects: ${error.message}`);
    return [];
  }
});

const ProjectSlice = createSlice({
  name: "Project",
  initialState: {
    allProjects: [],
    project: {},
    projectsFiltered: [],
    topProjects: []
  },
  reducers: {
    cleanDataProject: (state) => {
      state.project = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.project = action.payload;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.allProjects = action.payload;
      })
      .addCase(fetchArticlesData.fulfilled, (state, action) => {
        state.projectsFiltered = action.payload;
      })
      .addCase(getTopProjects.fulfilled, (state, action) => {
        state.topProjects = action.payload;
      });
  },
});
export const { cleanDataProject } = ProjectSlice.actions;
export default ProjectSlice;
