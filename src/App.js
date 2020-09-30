import React from "react";
import { listings } from "./data";
import JobListing from "./components/JobListing";

class App extends React.Component {
  state = {
    listings,
  };
  render() {
    return (
      <>
        <header className="header"></header>
        <div className="wrapper">
          {Object.keys(this.state.listings).map((key) => (
            <JobListing key={key} details={this.state.listings[key]} />
          ))}
        </div>
      </>
    );
  }
}

export default App;
