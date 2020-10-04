import React from "react";
import JobListing from "./JobListing";

function JobsList(props) {
  return (
    <div className="wrapper">
      {props.jobs.map((listing) => (
        <JobListing
          key={listing.id}
          details={listing}
          filterList={props.filterList}
        />
      ))}
    </div>
  );
}

export default JobsList;
