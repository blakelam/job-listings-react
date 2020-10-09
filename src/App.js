import React, { useState } from "react";
import JobsList from "./components/JobsList";
import TagsList from "./components/TagsList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { listings } from "./data";

function App() {
  const [state, setState] = useState({jobs: listings, tags: []});
  const allJobs = listings;

  // Updates selected tags list when a tag is clicked
  function updateTags(event) {
    // Get the value of the tag that was clicked
    const tag = event.target.dataset.tagValue;

    // Create a new tags list starting with all of the currently selected tags
    let selectedTags = [...state.tags];

    // Update the tag list
    if (selectedTags.includes(tag)) {
      // If clicked tag is already in the array, remove it
      selectedTags = selectedTags.filter((tagInList) => tagInList !== tag);
    } else {
      // If clicked tag isn't already in the array, add it
      selectedTags.push(tag);
    }
    
    // Filter the jobs list based on the selected tags
    const filteredJobs = filterJobs(selectedTags);

    setState({jobs: filteredJobs, tags: selectedTags});
  }

  function filterJobs(tagsList) {
    // Start with an empty list of matching jobs
    let matchingJobs = [];

    // If no tags are selected, set matching jobs to all jobs
    // Else, add jobs with matching tags to the matching jobs list
    if (tagsList.length === 0) {
      matchingJobs = [...allJobs];
    } else {
      allJobs.forEach((job) => {
        let match = true;
        const jobTags = getTags(job);
        tagsList.forEach((selectedTag) => {
          if (!jobTags.includes(selectedTag)) {
            match = false;
          }
        });
        if (match) matchingJobs.push(job);
      });
    }
    return matchingJobs;
  }

  // getTags() returns an array with all of a job listing's tags (role, level, languages, and tools).
  function getTags(jobListing) {
    const tagsList = [];
    tagsList.push(jobListing.role);
    tagsList.push(jobListing.level);
    jobListing.languages.map((language) => tagsList.push(language));
    jobListing.tools.map((tool) => tagsList.push(tool));
    return tagsList;
  }

  return (
    <>
      <Header />
      <Wrapper>
        <TagsList selectedTags={state.tags} updateTags={updateTags} />
        <JobsList
          jobs={state.jobs}
          updateTags={updateTags}
          getTags={getTags}
        />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
