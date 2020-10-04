import React, { useState } from "react";
import { listings } from "./data";
import JobsList from "./components/JobsList";
import JobListing from "./components/JobListing";

function App() {
  const [jobs, setJobs] = useState(listings);

  return (
    <>
      <header className="header"></header>
      <JobsList jobs={listings} />
    </>
  );
}

export default App;
