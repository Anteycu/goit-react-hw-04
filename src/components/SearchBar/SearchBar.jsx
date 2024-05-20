import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      toast.error("Empty search line", {
        position: "top-right",
      });
      return;
    }
    onSearch(query);
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
