import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <p>Check query state: {query}</p>
      <SearchBar request={query} onSearch={setQuery} />
    </>
  );
}

export default App;
