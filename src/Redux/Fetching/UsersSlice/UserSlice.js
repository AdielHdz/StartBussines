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
  return await fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => data.data);
});

export const registerUser = createAsyncThunk(
  "registerUser",
  async (newUser) => {
    console.log("Datos enviados a la API:", newUser);

    const response = await fetch(
      "/Api_dealUp/src/controllers/User/createNewUser.js",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    const data = await response.json();
    console.log("Datos recibidos de la API:", data);
    return data;
  }
);

export const getUserById = createAsyncThunk("getUserById", async (id) => {
  const response = await axios.get(`http://localhost:3001/users/${id}`);
  return response.data[0];
});

const User = createSlice({
  name: "user",
  initialState: {
    user: {},
    userDetail: {},
    users: users,
    usersFilter: users,
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
      });
  },
});

export const { filterByAge, updateUser } = User.actions;
export default User;