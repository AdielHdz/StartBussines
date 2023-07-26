

export const SearchProjectsSuggestions = ({ suggestions, closeSuggestions }) => {
  
  const handleClick = () => {
    closeSuggestions(); 
  };

  return (
    <a href="/projects" onClick={handleClick}>
      {/* <NavLink to={`/profile/${suggestions.id_users}`} onClick={handleClick}> */}
        <div className="p-10px 20px hover:bg-efefef cursor-pointer">
          {suggestions.name}
          
        </div>
      {/* </NavLink> */}
    </a>
  );
};
