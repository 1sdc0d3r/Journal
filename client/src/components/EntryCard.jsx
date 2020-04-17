import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function EntryCard(props) {
  const { entry, favoriteHandler, deleteHandler, editHandler } = props;

  //* reformat date here
  let date = entry.created_at;
  date = date.slice(0, 10).split("-");
  date.push(date.shift());
  entry.created_at = `${date[0]}-${date[1]}-${date[2]}`;

  return (
    <div key={entry.id} className="entry">
      {entry.favorite ? (
        <FaStar
          color="blue"
          size="1.25rem"
          style={{ padding: ".125rem" }}
          onClick={() => favoriteHandler(entry)}
        />
      ) : (
        <FaRegStar
          color="blue"
          size="1.25rem"
          style={{ padding: ".125rem" }}
          onClick={() => favoriteHandler(entry)}
        />
      )}
      {/* <p>{entry.id}</p> */}
      <p>Entry Date: {entry.created_at}</p>
      <p>Modified Date: {entry.modified_at}</p>
      <p>Description: {entry.description}</p>
      <button onClick={() => editHandler(entry)}>Edit</button>
      <button onClick={() => deleteHandler(entry)}>Delete</button>
    </div>
  );
}

export default EntryCard;
