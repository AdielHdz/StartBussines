import Link from "next/link";

export const SearchProjectsSuggestions = ({
  suggestions,
  closeSuggestions,
}) => {
  const handleClick = () => {
    closeSuggestions();
  };

  return (
    <Link
      href={`/contenedorbusqueda/projectDetail?id=${suggestions.id}`}
      className="no-underline"
    >
      <div
        className="p-10px 20px hover:bg-efefef cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-gray-800 text-sm hover:text-second w-full inline-block ">
          {suggestions.name}
        </span>
      </div>
    </Link>
  );
};
