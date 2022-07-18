import React from "react";

const CharacterCard = ({ item }) => {
  const favorite = (item) => {
    // Utilize local storage getting the previous element and adding the new favorite item
    var previousData = JSON.parse(localStorage.getItem("favorites"));
    previousData.push(item);
    localStorage.setItem("favorites", JSON.stringify(previousData));
  };

  return (
    // Render the character card with the item data
    <div className="content">
      <div className="content-inner">
        <div className="content-front">
          <img
            src={item.thumbnail.path + "." + item.thumbnail.extension}
            alt="character thumbnail"
          />
        </div>
        <div className="content-back">
          <a className="card-link" href={`${item.id}${item.name}`}>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Description:</strong>{" "}
                {item.description
                  ? item.description
                  : "Description not available"}
              </li>
              <li>
                <strong>Story:</strong> {item.stories.available}
              </li>
              <li>
                <strong>Events:</strong> {item.events.available}
              </li>
              {item.events.available > 0 && (
                <li>
                  <strong>Events name: </strong>
                  {item.events.items.map((item) => item.name)}
                </li>
              )}
              <li>
                <strong>Series:</strong> {item.series.available}
              </li>
              <li>
                <strong>Comics:</strong> {item.comics.available}
              </li>
              <li>
                <button
                  className="btn"
                  type="button"
                  onClick={() => favorite(item)}
                >
                  Add to Favorite
                </button>
              </li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
