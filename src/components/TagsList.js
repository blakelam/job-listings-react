import React from "react";

function TagsList(props) {
  return (
    <ul
      className={`selected-tags${
        props.selectedTags.length > 0 ? " visible" : ""
      }`}
    >
      {props.selectedTags.map((tag) => (
        <li
          key={tag}
          className="selected-tag"
          onClick={props.filterList}
          data-tag-value={tag}
        >
          {tag}{" "}
          <span className="selected-tag__remove" data-tag-value={tag}></span>
        </li>
      ))}
    </ul>
  );
}

export default TagsList;
