import { FaSearch } from "react-icons/fa";
import "./SearchBar.scss";

const SearchBar = () => {
  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="w-full flex items-center text-gray-900">
      <form
        role="form"
        method="get"
        className="search flex justify-center items-center w-6/12 p-1 bg-white text-gray-900 rounded-lg gap-3"
      >
        <input
          type="text"
          className="searchbar p-1 bg-transparent text-gray-900 text-sm w-full"
          placeholder="Search for projects, students, etc..."
          onChange={handleInput}
        ></input>
        <button
          type="submit"
          className="flex justify-center items-center py-1.5 px-4 rounded-lg bg-blue-600 text-white text-base cursor-pointer"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
