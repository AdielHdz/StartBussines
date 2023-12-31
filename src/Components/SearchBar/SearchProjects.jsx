"use client";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getProjects } from "../../Redux/Fetching/Projects/ProjectSlice";
import { SearchCategories } from "./SearchCategories";
import Link from "next/link";
import { RangeSlider } from "./RangeSlider";
import { addTags, deleteTags } from "../../Redux/Fetching/Filters/FiltersSlice";
import { usePathname } from "next/navigation";

export const SearchProjects = ({ setSuggestions, projects }) => {
  //el estado de los proyectos lo recibo como parametro (projects)
  console.log(projects);

  const [name, setName] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]); //los valores de este array le voy a pasar por query para que la ruta tome los valores y filtre los proyectos
  const dispatch = useDispatch();
  const [minOrMax, setMinOrMax] = useState("Max");
  const path = usePathname();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const handleChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setName(searchValue);

    const filteredSuggestions = projects.filter((project) =>
      project.name.toLowerCase().includes(searchValue)
    );

    setSuggestions(searchValue ? filteredSuggestions : []);
  };

  const handleInputFocus = () => {
    setShowCategories(true);
  };

  const handleSelectTag = (tags) => {
    setSelectedTags(tags);
    dispatch(addTags(tags));
  };

  console.log(selectedTags);

  const removeTags = (tagToRemove) => {
    setSelectedTags((prevTags) =>
      prevTags.filter((tag) => tag !== tagToRemove)
    );
    dispatch(deleteTags(tagToRemove));
  };
  const selectMinOrMax = (e) => {
    const value = e.target.value;
    setMinOrMax(value);
  };

  return (
    <div className="flex flex-col w-full ">
      <input
        className=" me-2  outline-none px-2 h-12 rounded-lg w-full focus:border-primar  border-2 border-blue-500"
        type="search"
        placeholder="Find Projects"
        value={name}
        onChange={handleChange}
        onFocus={handleInputFocus}
      />
      {name === "" && path !== "/contenedorbusqueda" && showCategories && (
        <div className="relative top-full left-1/2 transform -translate-x-1/2 ">
          <SearchCategories
            selectedTags={selectedTags}
            onSelectTag={handleSelectTag}
            setShowCategories={setShowCategories}
          />
          <div className="flex flex-wrap mb-2 mt-2">
            {selectedTags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-whites bg-second rounded "
              >
                {tag}
                <button
                  type="button"
                  className="inline-flex items-center p-1 ml-2 text-sm text-whites bg-transparent rounded-sm "
                  data-dismiss-target="#badge-dismiss-yellow"
                  aria-label="Remove"
                >
                  <svg
                    className="w-2 h-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    onClick={() => removeTags(tag)}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Remove badge</span>
                </button>
              </span>
            ))}
          </div>
          <div>
            <h2 className="  text-gray-900 font-medium text-sm ">
              Investment Range
            </h2>
            <select
              onChange={selectMinOrMax}
              className="mt-3 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            >
              <option className="text-gray-900 dark:text-gray-300" value="Max">
                Max
              </option>
              <option className="text-gray-900 dark:text-gray-300" value="Min">
                Min
              </option>
            </select>
          </div>
          <h2 className="block mb-2 font-medium text-sm text-gray-900   mt-3">
            Min-Max Range
          </h2>
          <RangeSlider
            initialMin={1}
            initialMax={100000}
            minOrMax={minOrMax}
            min={1}
            max={100000}
            step={100}
            priceCap={1000}
          />
          <div className="flex justify-center mt-4">
            {" "}
            <Link href={`/contenedorbusqueda`}>
              <button className="rounded-md text-sm  px-4 py-2  bg-second text-white hover:scale-110  transition transform duration-300 md:px-5 md:py-3">
                Search
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
