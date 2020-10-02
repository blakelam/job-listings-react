import React from "react";

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
              <ul className="job-listing__tags">
                {isNew ? <li className="job-listing__tag">New!</li> : ""}
                {isFeatured ? (
                  <li className="job-listing__tag job-listing__tag--dark">
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
        <ul className="job-listing__skills">
          <li key={`${id}-${role}`} className="job-listing__skill">
            {role}
          </li>
          <li key={`${id}-${level}`} className="job-listing__skill">
            {level}
          </li>
          {languages.map((language) => (
            <li key={`${id}-${language}`} className="job-listing__skill">
              {language}
            </li>
          ))}
          {tools.map((tool) => (
            <li key={`${id}-${tool}`} className="job-listing__skill">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobListing;
