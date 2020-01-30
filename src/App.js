import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import Counters from "./components/counters";
import { Component } from 'react';



class App extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 100 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
      { id: 5, value: 0 }
    ]
  };

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

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters: counters });
    //console.log(counter)
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({ counters: counters });
    //console.log(counter)
  };



  render() { 
    return (
      // <React.Fragment>
      //   <NavBar totalCounters ={this.state.counters.filter(c => c.value >0).length}></NavBar>
      //   <main className="container">
      //     <Counters
      //     counters = {this.state.counters}
      //       onReset={this.handleReset}
      //       onIncrement={this.handleIncrement}
      //       onDecrement={this.handleDecrement}
      //       onDelete={this.handleDelete}
      //     ></Counters>
      //   </main>
      // </React.Fragment>
  
      <main className="container">
        <Movies />
      </main>
    );
  }
}
export default App;


