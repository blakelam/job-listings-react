import React from "react";
import JobTags from "./JobTags";

function JobListing(props) {
  const {
    id,
    company,
    logo,
    new: isNew,
    featured: isFeatured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props.details;
  return (
    <div className={`job-listing${isFeatured ? " job-listing--featured" : ""}`}>
      <div className="job-listing__top">
        <img src={logo} alt={company} className="job-listing__logo" />
        <div className="job-listing__details">
          <div className="job-listing__details-row">
            <p className="job-listing__company">{company}</p>
            {isFeatured || isNew ? (
              <ul className="job-listing__status-tags">
                {isNew ? <li className="job-listing__status-tag">New!</li> : ""}
                {isFeatured ? (
                  <li className="job-listing__status-tag job-listing__status-tag--dark">
                    Featured
                  </li>
                ) : (
                  ""
                )}
              </ul>
            ) : (
              ""
            )}
          </div>
          <p className="job-listing__position">{position}</p>
          <p className="job-listing__metadata">
            {`${postedAt} • ${contract} • ${location}`}
          </p>
        </div>
      </div>
      <div className="job-listing__bottom">
        <JobTags
          id={id}
          role={role}
          level={level}
          languages={languages}
          tools={tools}
          filterList={props.filterList}
        />
      </div>
    </div>
  );
}

export default JobListing;
