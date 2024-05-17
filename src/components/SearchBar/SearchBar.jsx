import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      console.log("Need write smth to search");
      return;
    }
    onSubmit(query);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
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
