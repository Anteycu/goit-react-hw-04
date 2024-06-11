import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

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
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
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
