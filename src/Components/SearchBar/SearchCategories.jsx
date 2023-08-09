import CloseButtonX from "../CloseButtonX/CloseButtonX";

export const SearchCategories = ({
  selectedTags,
  onSelectTag,
  setShowCategories,
}) => {
  const handleTagClick = (tag) => {
    if (!selectedTags.includes(tag)) {
      onSelectTag([...selectedTags, tag]);
    }
  };

  return (
    <div className=" mt-3">
      <CloseButtonX handleCloseWindow={setShowCategories} />
      <h2 className="font-medium text-sm text-gray-900 ">Categories </h2> <hr />
      <div className="mt-3 flex  flex-wrap gap-2">
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Art")}
        >
          Art
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Comics")}
        >
          Comics
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Crafts")}
        >
          Crafts
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Dance")}
        >
          Dance
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Design")}
        >
          Design
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Fashion")}
        >
          Fashion
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Film & Video")}
        >
          Film & Video
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Journalism")}
        >
          Journalism
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Music")}
        >
          Music
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Photography")}
        >
          Photography
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Publishing")}
        >
          Publishing
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Technology")}
        >
          Technology
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Theater")}
        >
          Theater
        </button>
        <button
          className="text-sm rounded-lg border-2 border-second text-second hover:bg-second hover:text-white transition-colors duration-300 px-2 py-1 "
          onClick={() => handleTagClick("Sport")}
        >
          Sport
        </button>
      </div>
    </div>
  );
};
