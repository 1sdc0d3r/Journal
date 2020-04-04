import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function EntryCard(props) {
  const { entry, favoriteHandler, deleteHandler, editHandler } = props;
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
      <p>{entry.id}</p>
      <p>Entry Date: {entry.created_at}</p>
      <p>Modified Date: {entry.modified_at}</p>
      <p>Description: {entry.description}</p>
      <button onClick={() => editHandler(entry)}>Edit</button>
      <button onClick={() => deleteHandler(entry)}>Delete</button>
    </div>
  );
}

export default EntryCard;
