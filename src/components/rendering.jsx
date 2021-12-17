import React, { Component } from "react";

class Rendering extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}{" "}
        //conditional rendering
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are not tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Rendering;
