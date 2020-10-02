import React, { useState } from "react";
import { listings } from "./data";
import JobListing from "./components/JobListing";

function App() {
  const [jobs, setJobs] = useState(listings);

  return (
    <>
      <header className="header"></header>
      <div className="wrapper">
        {Object.keys(jobs).map((key) => (
          <JobListing key={key} details={jobs[key]} />
        ))}
      </div>
    </>
  );
}

export default App;
