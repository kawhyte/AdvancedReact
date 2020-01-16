import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    return (
      <div>
        <h1>Counters</h1>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }

 
}

export default Counters;
