import { configureStore } from "@reduxjs/toolkit";
import User from "./Fetching/UsersSlice/UserSlice";
import ProjectSlice from "./Fetching/Projects/ProjectSlice";
import RatingSlice from "./Fetching/Rating/Rating";
import FilterSlice from "./Fetching/Filters/FiltersSlice";
import InvestmentSlice from "./Fetching/Investment/InvestmentSlice";
import UserRealSlice from "./UserRealSlice/UserRealSlice";
export const store = configureStore({
  reducer: {
    user: User.reducer,
    project: ProjectSlice.reducer,
    rating: RatingSlice.reducer,
    filters: FilterSlice.reducer,
    investment: InvestmentSlice.reducer,
    userReal: UserRealSlice.reducer,
  },
});
