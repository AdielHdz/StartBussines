import { configureStore } from "@reduxjs/toolkit";
import User from "./Fetching/UsersSlice/UserSlice";
import ProjectSlice from "./Fetching/Projects/ProjectSlice";
import RatingSlice from "./Fetching/Rating/Rating";
export const store = configureStore({
  reducer: {
    user: User.reducer,
    project: ProjectSlice.reducer,
    rating: RatingSlice.reducer,
  },
});
