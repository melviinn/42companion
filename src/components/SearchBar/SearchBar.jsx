import { FaSearch } from "react-icons/fa";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <form role="search" className="search">
        <input
          type="text"
          className="searchbar"
          placeholder="Search..."
        ></input>
        <button type="submit" className="searchButton">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
