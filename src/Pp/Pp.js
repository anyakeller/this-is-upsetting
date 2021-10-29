import React from "react";
import PpControls from "./PpControls";
import PpCanvas from "./PpCanvas";
import {
  parseFunction,
  allowablechar,
  parseCaret,
  firstParentheses,
  lastParentheses
} from "./dfpp.js";


var xmin, xmax, ymin, ymax;
var x0, y0;
var i, xprime, yprime;

class Pp extends React.Component {
  constructor(props) {
    super(props);
    this.myCanvas = React.createRef();
    this.xAxis = React.createRef();
    this.yAxis = React.createRef();
  }
  componentDidMount() {
    this.context = this.myCanvas.current.getContext("2d");
  }

  render() {
    return (
      <div>
        <PpControls canvas={this.myCanvas} xAxis={this.xAxis} yAxis={this.yAxis} context={this.context} />
        <canvas
          ref={this.yAxis}
          id="yAxisCanvas"
          width="30"
          height="600"
          className="axis"></canvas>
        <canvas
          ref={this.myCanvas}
          id="myCanvas"
          width="600"
          height="600"></canvas>
        <canvas
          id="spacerCanvas"
          width="30"
          height="30"
          className="axis"></canvas>
        <canvas
          ref={this.xAxis}
          id="xAxisCanvas"
          width="600"
          height="30"
          className="axis"></canvas>
      </div>
    );
  }
}

export default Pp;
