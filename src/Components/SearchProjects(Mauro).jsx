"use client"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjectsByName } from "../Redux/Fetching/UsersSlice/UserSlice";

export const SearchProjects = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(getProjectsByName(event.target.value));
  };

  return (
    <div className="d-flex flex-grow-2 w-50">
      <input
        className="form-control me-2 rounded-pill border border-blue-500"
        type="search"
        placeholder="Find Projects"
        onChange={handleChange}
      />
    </div>
  );
};

export const ParentComponent = () => {
  const [suggestions, setSuggestions] = useState([]);
  const searchResults = useSelector((state) => state.user.searchResults);

  useEffect(() => {
    setSuggestions(searchResults);
  }, [searchResults]);

  return <SearchProjects />
}

// pasar esto a la searchProjects y eliminar una vez funcionando
