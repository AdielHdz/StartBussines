import { SearchProjectsSuggestions } from "./SearchProjectsSuggestions";

export const SearchProjectsList = ({ suggestions }) => {
  return (
    <div className="relative flex justify-center mt-2"> {/* Agregamos la clase "flex justify-center" para centrar horizontalmente */}
      <div className="absolute w-64 bg-white flex flex-col shadow-md rounded-lg mt-1 max-h-300px overflow-y-auto top-full left-1/2 transform -translate-x-1/2"> {/* Ajustamos la posición para centrar horizontalmente */}
        {suggestions.map((result, id) => {
          return (
            <div
              className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100"
              key={id}
            >
              <SearchProjectsSuggestions suggestions={result} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
