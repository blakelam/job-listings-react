import React from "react";

function JobTags(props) {
  const tagsList = props.getTags(props.details);

  return (
    <ul className="job-listing__tags">
      {tagsList.map((tag) => (
        <li
          key={`${props.id}-${tag}`}
          className="job-listing__tag"
          onClick={props.updateTags}
          data-tag-value={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default JobTags;
