import React from "react";
//  Import components
import CharacterCard from "../characterCard/CharacterCard";
import Spinner from "../spinner/Spinner";

const CharacterTable = ({ items, isLoading }) => {
// Check if the items array is empty or not
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="contents">
      {items.map((item, index) => (
        <CharacterCard key={index} item={item}></CharacterCard>
      ))}
    </section>
  );
};

export default CharacterTable;
