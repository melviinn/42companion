import { FaSearch } from "react-icons/fa";
import "./SearchBar.scss";

const SearchBar = () => {
  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="searchbar-container">
      <form role="form" method="get" className="search">
        <input
          type="text"
          className="searchbar"
          placeholder="Search for projects, students, etc..."
          onChange={handleInput}
        ></input>
        <button type="submit" className="searchButton">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
