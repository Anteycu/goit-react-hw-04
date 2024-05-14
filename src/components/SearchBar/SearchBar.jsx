const SearchBar = ({ request, onSearch }) => {
  return (
    <input
      type="text"
      value={request}
      onChange={e => {
        onSearch(e.target.value);
      }}
    />
  );
};

export default SearchBar;
