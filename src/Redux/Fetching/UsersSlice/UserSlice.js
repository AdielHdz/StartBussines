import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const users = [
    {id: 1, name: "Daniel", age: 25 },
    {id: 2, name: "Valentina", age: 20 },
    {id: 3, name: "Adiel", age: 23 },
    {id: 4, name: "Mauroo", age: 28 }
]



export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
    console.log("Funcionando correctamente")
    return await fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data => data.data)
})


const User = createSlice({
    name: "user",
    initialState: {
        user: {},
        users: users,
        usersFilter: users,
    },
    reducers: {
        filterByAge: (state, action) => {
            state.usersFilter = state.users.filter(user => user.age > action.payload)
        },
        filterById: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.usersFilter = action.payload
        });
    }
});


export const { filterByAge } = User.actions;
export default User;


