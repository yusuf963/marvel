import React, { useState, useEffect } from "react";
import CharacterCard from "../characterCard/CharacterCard";
import "./style.css";

function Filter({ characters }) {
  // set the initial state
  const [applyFilter, setApplyFilter] = useState(false);
  const [numberOfSeries, setNumberOfSeries] = useState(null);
  const [filter, setFilter] = useState([]);

  const handleNumberInput = (e) => {
    setNumberOfSeries(e.target.value);
  };

  useEffect(() => {
    const handleChange = (characters) => {
      characters.map((character) => {
        if (character.series.available > numberOfSeries) {
          setFilter((prev) => [...prev, character]);
        }
        return filter;
      });
    };
    handleChange(characters);
  }, [applyFilter]);

  const handleFilter = () => {
    setApplyFilter(true);
    handleNumberInput();
  };
  const removeFilter = () => {
    setFilter([]);
    setNumberOfSeries(null);
  };
  return (
    <div>
      <div className="filter-container">
        <h5 className="filter-text">
          Filter characters based on number of series appeared on
        </h5>
        <div className="filter-form">
          <input
            className="filter-input"
            type="number"
            placeholder="Add number"
            onChange={handleNumberInput}
          />
          <button className="apply-btn" onClick={handleFilter}>
            Apply
          </button>
          <button className="clear-btn" onClick={removeFilter}>
            Clear
          </button>
        </div>
      </div>
      <section className="contents">
        {filter.map((character, index) => {
          return <CharacterCard key={index} item={character} />;
        })}
      </section>
    </div>
  );
}
export default Filter;
