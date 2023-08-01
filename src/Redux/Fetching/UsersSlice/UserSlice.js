import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const users = [
  { id: 1, name: "Daniel", age: 25 },
  { id: 2, name: "Valentina", age: 20 },
  { id: 3, name: "Adiel", age: 23 },
  { id: 4, name: "Mauroo", age: 28 },
];

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  console.log("Funcionando correctamente");
  return await axios("https://reqres.in/api/user")
    .then((response) => response.json())
    .then((data) => data.data);
});

export const registerUser = createAsyncThunk(
  "registerUser",
  async (newUser) => {
    console.log("Datos enviados a la API:", newUser);

    try {
      const response = await axios.post(`/user`, newUser);

      if (
        response.data.error &&
        response.data.error === "User already exists"
      ) {
        throw new Error("User already exists");
      }

      console.log("Datos recibidos de la API:", response.data);

      return response.data;
    } catch (error) {
      console.log("Failed to register user:", error.response.data);
      alert(error.response.data.error);
    }
  }
);

export const getUserById = createAsyncThunk("getUserById", async (id) => {
  const response = await axios.get(`http://localhost:3001/user/${id}`);
  return response.data;
});

export const getProjectsByName = createAsyncThunk(
  "getProjectsByName",
  async (nameProjects) => {
    console.log(
      `getProjectsByName se está ejecutando con el nombre: ${nameProjects}`
    );

    try {
      const response = await axios.get(`/projects?name=${nameProjects}`);

      console.log("Datos recibidos de la API:", response.data);

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      return response.data;
    } catch (error) {
      console.log(`Failed to get projects: ${error.message}`);
      return [];
    }
  }
);

const User = createSlice({
  name: "user",
  initialState: {
    user: {},
    userDetail: {},
    users: users,
    usersFilter: users,
    searchResults: [],
    searchProjects: [],
  },
  reducers: {
    filterByAge: (state, action) => {
      state.usersFilter = state.users.filter(
        (user) => user.age > action.payload
      );
    },
    filterById: (state, action) => {},
    updateUser: (state, action) => {
      state.userDetail = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.usersFilter = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.usersFilter.push(action.payload);
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.userDetail = action.payload;
      })
      .addCase(getProjectsByName.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      });
  },
});

export const { filterByAge, updateUser } = User.actions;
export default User;
