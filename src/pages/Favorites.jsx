import React, { useState, useEffect } from "react";
import CharacterTable from "../components/charactersTable/CharactersTable";

// todo: add Favorite component
const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  return (
    <div>
      {favorites ? (
        <CharacterTable items={favorites} />
      ) : (
        <h1>No favorites yet</h1>
      )}
    </div>
  );
};

export default Favorites;
