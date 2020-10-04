import React from "react";

function JobTags(props) {
  const tagsList = [];
  tagsList.push(props.role);
  tagsList.push(props.level);
  props.languages.map((language) => tagsList.push(language));
  props.tools.map((tool) => tagsList.push(tool));

  return (
    <ul className="job-listing__tags">
      {tagsList.map((tag) => (
        <li
          key={`${props.id}-${tag}`}
          className="job-listing__tag"
          onClick={props.filterList}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default JobTags;
