
export const SearchCategories = ({ selectedTags, onSelectTag }) => {

    const handleTagClick = (tag) => {
      if (!selectedTags.includes(tag)) {
        onSelectTag([...selectedTags, tag]);
      }
    };

  return (
    <div className="mt-3">
      <h2 className="text-lg font-medium text-gray-900 dark:text-gray-300">Categories </h2> <hr />
      <div className="mt-3">
        <button
          className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
          onClick={() => handleTagClick("Art")}
        >
          Art
        </button>
        <button
          className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
          onClick={() => handleTagClick("Comics")}
        >
          Comics
        </button>
        <button 
            className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
            onClick={() => handleTagClick("Crafts")}
        >  
          Crafts
        </button>
        <button 
            className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
            onClick={() => handleTagClick("Dance")}
            >
          Dance
        </button>
        <button 
            className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
            onClick={() => handleTagClick("Design")}
            >
          Design
        </button>
        <button 
            className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
            onClick={() => handleTagClick("Fashion")}
            >
          Fashion
        </button>
        <button 
            className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
            onClick={() => handleTagClick("Film & Video")}
        >
          Film & Video
        </button>
        <button 
            className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
            onClick={() => handleTagClick("Journalism")}
            >
          Journalism
        </button>
        <button 
            className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
            onClick={() => handleTagClick("Music")}
            >
            Music
        </button>
        <button 
            className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
            onClick={() => handleTagClick("Photography")}
            >
          Photography
        </button>
        <button 
            className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
            onClick={() => handleTagClick("Publishing")}
        >
          Publishing
        </button>
        <button 
            className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
            onClick={() => handleTagClick("Technology")}
            >
          Technology
        </button>
        <button 
            className="rounded-lg border border-pink-200 text-pink-200 hover:bg-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 mr-2 mb-2"
            onClick={() => handleTagClick("Theater")}
            >
          Theater
        </button>
      </div>
    </div>
  );
};
