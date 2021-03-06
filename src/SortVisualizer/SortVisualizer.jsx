import React from "react";
import { getMergeSortAnimations } from "../sortAlgorithms/MergesortAlgorithm.js";
import { getQuickSortAnimations } from "../sortAlgorithms/QuicksortAlgorithm.js";
import { getInsertionsortAnimations } from "../sortAlgorithms/InsertionsortAlgorithm.js";
import { getBubblesortAnimations } from "../sortAlgorithms/BubblesortAlgorithm.js";
import { getSelectionsortAnimations } from "../sortAlgorithms/SelectionsortAlgorithm.js";
import "./SortVisualizer.css";

// Change this value for the speed of the animations.
let ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
let NUMBER_OF_ARRAY_BARS = 20;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#ffe400";
let MAX_ARRAY;
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "#d50000";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    // Checks the display parameter , when the DOM is loaded
    this.checkdisplay();
    this.initalSet();
  }

  checkdisplay() {
    //Adjusts the No of BARS and the Height of the Bars according the screen size
    //Note : This is no responsive design .
    if (window.innerWidth <= 767 && window.innerHeight <= 360) {
      MAX_ARRAY = 200;
      NUMBER_OF_ARRAY_BARS = 20;
    } else if (window.innerWidth <= 767 && window.innerHeight <= 480) {
      MAX_ARRAY = 350;
      NUMBER_OF_ARRAY_BARS = 20;
    } else if (window.innerWidth < 767) {
      MAX_ARRAY = 500;
      NUMBER_OF_ARRAY_BARS = 20;
    } else if (window.innerWidth > 768) {
      MAX_ARRAY = 600;
      NUMBER_OF_ARRAY_BARS = 50;
    }
  }

  initalSet() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, MAX_ARRAY));
    }
    this.setState({ array });
  }

  resetArray() {
    window.location.reload();
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const [animations] = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length - 1; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 6 === 0 || i % 6 === 1;
      if (isColorChange === true) {
        const color = i % 6 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [barOneIndex, barTwoIndex] = animations[i];
        if (barOneIndex === -1) {
          continue;
        }

        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  insertionSort() {
    const [animations] = getInsertionsortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "firstcomparision" ||
        animations[i][0] === "secondcomparision";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color =
          animations[i][0] === "firstcomparision"
            ? SECONDARY_COLOR
            : PRIMARY_COLOR;
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [temp, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const [animations] = getBubblesortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  selectionSort() {
    const [animations] = getSelectionsortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "firstcomparision" ||
        animations[i][0] === "secondcomparision";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color =
          animations[i][0] === "firstcomparision"
            ? SECONDARY_COLOR
            : PRIMARY_COLOR;
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [temp, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  render() {
    const { array } = this.state;

    return (
      <>
        <div className="header">
          <a onClick={() => this.resetArray()}>New Array</a>
          <a onClick={() => this.mergeSort()}>Merge Sort</a>
          <a onClick={() => this.quickSort()}>Quick Sort</a>
          <a onClick={() => this.insertionSort()}>Insertion Sort</a>
          <a onClick={() => this.bubbleSort()}>Bubble Sort</a>
          <a onClick={() => this.selectionSort()}>Selection Sort</a>
        </div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                height: `${value}px`,
                width: "5px",
                color: "transparent",
                fontSize: "8px",
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </>
    );
  }
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
