import React from "react";
import "./SortVisualizer.css";

export default class SortVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(5, 1000));
    }
    this.setState({ array }); //reset the state of the new array after push
  }

  render() {
    const { array } = this.state;

    return (
      <>
        {array.map((value, index) => (
          <div className="array-bar" key={index}>
            {value}
          </div>
        ))}
      </>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
