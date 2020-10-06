import React, { useState } from "react";
import { listings } from "./data";
import JobsList from "./components/JobsList";
import TagsList from "./components/TagsList";

function App() {
  const [jobs, setJobs] = useState(listings);
  const selectedTagsVar = useState([]);
  let selectedTags = selectedTagsVar[0];

  // Returns an array with all of a job listing's tags (role, level, languages, and tools)
  function getTags(jobListing) {
    const tagsList = [];
    tagsList.push(jobListing.role);
    tagsList.push(jobListing.level);
    jobListing.languages.map((language) => tagsList.push(language));
    jobListing.tools.map((tool) => tagsList.push(tool));
    return tagsList;
  }

  // Handle clicks on job tags
  function filterList(event) {
    const tag = event.target.dataset.tagValue;
    setJobs(listings);

    if (selectedTags.includes(tag)) {
      // If clicked tag is already in the list, remove it
      const i = selectedTags.indexOf(tag);
      selectedTags.splice(i, 1);
    } else {
      // If clicked tag isn't already in the list, add it
      selectedTags.push(tag);
    }

    // If no tags are selected, reset state to include all listings, else set state to only include filtered job listings
    if (selectedTags.length !== 0) {
      let filteredJobs = [];
      jobs.forEach((job) => {
        //console.table(filteredJobs);
        let match = true;
        const jobTags = getTags(job);
        selectedTags.forEach((selectedTag) => {
          if (!jobTags.includes(selectedTag)) {
            match = false;
          }
        });
        if (match) filteredJobs.push(job);
      });
      setJobs(filteredJobs);
    }
  }

  return (
    <>
      <header className="header"></header>
      <div className="wrapper">
        <TagsList selectedTags={selectedTags} filterList={filterList} />
        <JobsList jobs={jobs} filterList={filterList} getTags={getTags} />
      </div>
    </>
  );
}

export default App;
