import React from "react";
import JobListing from "./JobListing";

function JobsList(props) {
  return (
    <>
      {props.jobs.map((listing) => (
        <JobListing
          key={listing.id}
          details={listing}
          filterList={props.filterList}
          getTags={props.getTags}
        />
      ))}
    </>
  );
}

export default JobsList;
