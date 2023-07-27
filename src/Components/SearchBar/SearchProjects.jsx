"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProjects } from "../../Redux/Fetching/UsersSlice/UserSlice";
import { SearchCategories } from "./SearchCategories";

export const SearchProjects = ({ setSuggestions, projects }) => {
  //el estado de los proyectos lo recibo como parametro (projects)

  const [name, setName] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]); //los valores de este array le voy a pasar por query para que la ruta tome los valores y filtre los proyectos
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch])
  

  const handleChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setName(searchValue);

    const filteredSuggestions = projects.filter((project) =>
      project.projectName.toLowerCase().includes(searchValue)
    );

    setSuggestions(searchValue ? filteredSuggestions : []);
  };

  const handleInputFocus = () => {
    setShowCategories(true);
  };

  const handleSelectTag = (tags) => {
    setSelectedTags(tags);
  };

  console.log(selectedTags);

  const removeTags = (tagToRemove) => {
    setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  

  return (
    <div className="flex flex-col w-50">
      
      <input
        className="form-control me-2 rounded-pill border border-blue-500"
        type="search"
        placeholder="Find Projects"
        value={name}
        onChange={handleChange}
        onFocus={handleInputFocus}
      />
      {name === "" && showCategories && (
        <div className="relative top-full left-1/2 transform -translate-x-1/2">
          <SearchCategories selectedTags={selectedTags} onSelectTag={handleSelectTag}/>
          <div className="flex flex-wrap mt-2">
          {selectedTags.map((tag, index) => (
            <span key={index} className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300">
            {tag}
            <button 
              type="button" 
              className="inline-flex items-center p-1 ml-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300"
              data-dismiss-target="#badge-dismiss-yellow" 
              aria-label="Remove"
              >
              <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" onClick={() => removeTags(tag)}>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Remove badge</span>
            </button>
          </span>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};


