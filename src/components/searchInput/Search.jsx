import React, { useState } from "react";

const Search = ({ search }) => {
  const [text, setText] = useState("");

  const onSearch = (query) => {
    setText(query);
    search(query);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Find a character"
          autoFocus
          onChange={(e) => onSearch(e.target.value)}
          value={text}
        />
      </form>
    </section>
  );
};

export default Search;
