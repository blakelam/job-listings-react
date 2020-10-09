import React from "react";
import JobListing from "./JobListing";

function JobsList(props) {
  return (
    <>
      {props.jobs.map((listing) => (
        <JobListing
          key={`listing-${listing.id}`}
          details={listing}
          updateTags={props.updateTags}
          getTags={props.getTags}
        />
      ))}
    </>
  );
}

export default JobsList;
