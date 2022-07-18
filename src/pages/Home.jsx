import React, { useEffect, useState } from "react";
import axios from "axios";

// import components
import CharactersTable from "../components/charactersTable/CharactersTable";
import ScrollButton from "../components/scrollButton/ScrollButton";
import Pagination from "../components/pagination/Pagination";
import Header from "../components/header/Header";
import Search from "../components/searchInput/Search";
import Filter from "../components/filter/Filter";

const hash = "719e460d8b93a60cb65519481d4ea2c6";
const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(12);

  useEffect(() => {
    const fetch = async () => {
      if (query !== "") {
        const result = await axios(
          `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`
        );
        setCharacters(result.data.data.results);
        setLoading(false);
      } else {
        const result = await axios(
          `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=a6cb1180e14c4bd80d5a0ea75629f7a9&hash=${hash}`
        );
        setCharacters(result.data.data.results);
        setLoading(false);
      }
    };

    fetch();
  }, [query]);

  // pagination
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Header />
      <Search search={(query) => setQuery(query)}></Search>
      <Filter characters={characters} />
      <CharactersTable items={currentCharacters} isLoading={isLoading} />
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={characters.length}
        paginate={paginate}
      />
      <ScrollButton />
    </div>
  );
};

export default Home;
