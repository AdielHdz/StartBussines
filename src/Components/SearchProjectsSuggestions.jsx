
export const SearchProjectsSuggestions = ({ suggestions, closeSuggestions }) => {
  
  const handleClick = () => {
    closeSuggestions(); 
  };

  return (
    <>
      <a href="/projects" onClick={handleClick} className="no-underline">
        {/* <NavLink to={`/profile/${suggestions.id_users}`} onClick={handleClick}> */}
          <div className="p-10px 20px hover:bg-efefef cursor-pointer">
            <span className="text-gray-800 font-semibold ">
              {suggestions.projectName}
            </span>
          </div>
        {/* </NavLink> */}
      </a>
    </>
  );
};
