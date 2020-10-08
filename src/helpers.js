// getTags() returns an array with all of a job listing's tags (role, level, languages, and tools).
export function getTags(jobListing) {
  const tagsList = [];
  tagsList.push(jobListing.role);
  tagsList.push(jobListing.level);
  jobListing.languages.map((language) => tagsList.push(language));
  jobListing.tools.map((tool) => tagsList.push(tool));
  return tagsList;
}
