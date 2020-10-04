import React, { useState } from "react";
import { listings } from "./data";
import JobsList from "./components/JobsList";

function App() {
  const [jobs, setJobs] = useState(listings);

  const filterList = (event) => {
    console.log(event.target);
    event.target.classList.toggle("selected");
  };

  return (
    <>
      <header className="header"></header>
      <JobsList jobs={jobs} filterList={filterList} />
    </>
  );
}

export default App;
