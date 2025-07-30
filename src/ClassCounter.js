import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  decrement = () => {
    this.setState(prev => ({
      count: prev.count > 0 ? prev.count - 1 : 0,
    }));
  };

  render() {
    return (
      <div className="counter-box">
        <h2>Class Component</h2>
        <p className="count">{this.state.count}</p>
        <div className="btn-group">
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
