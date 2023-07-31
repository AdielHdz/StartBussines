import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosConfig";

export const getProjectById = createAsyncThunk("getProjectById", async (id) => {
  return await axios.get(`projects/${id}`).then((response) => response.data);
});

export const fetchArticlesData = createAsyncThunk(
  "fetchArticlesData",
  async (filters) => {
    console.log(filters);
    try {
      const response = await fetch("http://localhost:3001/projects/filter", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  }
);

export const getProjects = createAsyncThunk("getProjects", async () => {
  try {
    const response = await axios.get(`http://localhost:3001/projects`);

    console.log("Datos recibidos de la API:", response.data);

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
    project: [],
    projectsFiltered: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.project = action.payload;
        console.log(action.payload);
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.allProjects = action.payload;
      })
      .addCase(fetchArticlesData.fulfilled, (state, action) => {
        state.projectsFiltered = action.payload;
        console.log(state.projectsFiltered);
      });
  },
});

export default ProjectSlice;
