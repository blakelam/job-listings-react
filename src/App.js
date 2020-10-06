import React, { useState } from "react";
import { listings } from "./data";
import JobsList from "./components/JobsList";
import TagsList from "./components/TagsList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  const [jobs, setJobs] = useState(listings);

  /*
    ! This is to correct an error that was blocking the Netlify build. I wasn't using the setSelectedTags function, and the build was throwing an error. Need to figure out if the selected tags need to be stored in state and/or if they need to be updated differently. 
  */
  const selectedTagsVar = useState([]);
  let selectedTags = selectedTagsVar[0];

  /*
    * getTags() returns an array with all of a job listing's tags (role, level, languages, and tools).
    ? Should this function live somewhere else?
  */
  function getTags(jobListing) {
    const tagsList = [];
    tagsList.push(jobListing.role);
    tagsList.push(jobListing.level);
    jobListing.languages.map((language) => tagsList.push(language));
    jobListing.tools.map((tool) => tagsList.push(tool));
    return tagsList;
  }

  /*
    * filterList() filters job list to only show jobs with set tags (called when a tag is clicked).
    ! Bug - If two tags are selected (example: Frontend and Senior), removing one of the tags does not update the list. This is due to how useState() works, just not sure how to fix yet.
  */
  function filterList(event) {
    const tag = event.target.dataset.tagValue;
    setJobs(listings);

    if (selectedTags.includes(tag)) {
      // If clicked tag is already in the array, remove it
      const i = selectedTags.indexOf(tag);
      selectedTags.splice(i, 1);
    } else {
      // If clicked tag isn't already in the array, add it
      selectedTags.push(tag);
    }

    // If any tags are selected, set state to only include filtered job listings
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
      <Header />
      <Wrapper>
        <TagsList selectedTags={selectedTags} filterList={filterList} />
        <JobsList jobs={jobs} filterList={filterList} getTags={getTags} />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
