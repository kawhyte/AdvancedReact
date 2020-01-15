import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 100 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
      { id: 5, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        <h1>Counters</h1>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }

  handleReset = counterId => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
    console.log("Reset!!!!!!", counters);
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    
  };

  handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const  index = counters.indexOf(counter)
    counters[index] =  {...counter}
    counters[index].value++;

    this.setState({ counters: counters });
      console.log(counter)
  }
}

export default Counters;
