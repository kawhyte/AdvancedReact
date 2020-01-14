import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200'
  };

  styles ={
      fontSize:100,
      fontWeight:'bold'
  }

  render() {
    return (
      <div>
          <img src={this.state.imageUrl} alt=""/>
        <span style ={this.styles} className= "badge badge-primary m-2">{this.formatCount()}</span>
        <button className= "btn btn-secondary btn-sm">Incrament</button>
      </div>
    );
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
