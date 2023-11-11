import "./search-box.styles.css";

const SearchBox = ({ onSearchChange }) => (
  <input
    className="search-box"
    type="search"
    placeholder="search monster"
    onChange={onSearchChange}
  />
);
export default SearchBox;
