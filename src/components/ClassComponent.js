import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: 'Hello from Class Component!'
    };
  }

  componentDidMount() {
    console.log('Class Component mounted');
  }

  componentDidUpdate() {
    console.log('Class Component updated');
  }

  componentWillUnmount() {
    console.log('Class Component will unmount');
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  changeMessage = () => {
    this.setState({ message: 'Message updated!' });
  };

  render() {
    return (
      <div className="class-component">
        <h4>Class Component with Lifecycle</h4>
        <p>{this.state.message}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>
          Increment Count
        </button>
        <button onClick={this.changeMessage}>
          Change Message
        </button>
      </div>
    );
  }
}

export default ClassComponent;