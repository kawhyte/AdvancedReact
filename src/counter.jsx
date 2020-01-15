import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
//  constructor(){

//     super();
//     this.handleIncrement= this.handleIncrement.bind(this);
//  }
  styles = {
    fontSize: 51,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>No tags</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  handleIncrement = () => {
    console.log("incremented!", this);
    this.setState({count: this.state.count +1})
  }

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt=""/> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Incrament
        </button>

        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
