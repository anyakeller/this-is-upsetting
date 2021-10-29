import React from "react";
import { parseFunction } from "./dfpp.js";

class PpControls extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = props.canvas;
    this.context = props.context;
    this.xAxis = props.xAxis;
    this.yAxis = props.yAxis;

    this.handleUserInput = this.handleUserInput.bind(this);
    this.state = {
      xprime: "y-0.5*x",
      yprime: "sin(x)",
      xmin: -5,
      ymin: -5,
      arrow: 15,
      variableArrows: false,
      xmax: 5,
      ymax: 5,
      arrownumber: 20
    };
  }
  handleUserInput(event) {
    console.log("asdf");
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // Draw the axes and the phase plane
  draw = () => {
    console.log("draw");
    var steps = this.state.arrownumber;
    let xAxis = this.xAxis.current;
    let yAxis = this.yAxis.current;
    var xCtx = xAxis.getContext("2d");
    var yCtx = yAxis.getContext("2d");

    let canvas = this.canvas;
    let context = canvas.current.getContext("2d");

    context.clearRect(0, 0, canvas.current.width, canvas.current.height);
    xCtx.clearRect(0, 0, xAxis.width, xAxis.height);
    yCtx.clearRect(0, 0, yAxis.width, yAxis.height);
    context.lineWidth = 1;

    this.setDerivatives();
    let xmax = this.state.xmax;
    let xmin = this.state.xmin;
    let ymax = this.state.ymax;
    let ymin = this.state.ymin;
    var xscale = canvas.width / (xmax - xmin);
    var yscale = canvas.height / (ymax - ymin);
    var x0 = -1 * xmin * xscale;
    var y0 = ymax * yscale;
    var xstep = (xmax - xmin) / steps;
    var ystep = (ymax - ymin) / steps;
    let xstepsize = this.state.xstepsize;
    let ystepsize = this.state.ystepsize;

    // Draw some grid lines
    context.strokeStyle = "rgba(192, 192, 255, 1)"; // light blue lines
    context.beginPath();
    xCtx.textAlign = "center";
    yCtx.textAlign = "end";
    xCtx.textBaseline = "top";
    yCtx.textBaseline = "middle";
    xstepsize = 0.25 * Math.ceil(4 * ((xmax - xmin) / 20));
    ystepsize = 0.25 * Math.ceil(4 * ((ymax - ymin) / 20));
    var x;
    x = 0.5 * Math.ceil(2 * (xmin + xstepsize * 1.0));
    console.log("iiiiing");
  };

  setDerivatives() {
    // console.log(this.state);
    let yprimeString = parseFunction(this.state.yprime);
    let xprimeString = parseFunction(this.state.xprime);

    try {
      eval("let yprime = function (x,y)  {return " + yprimeString + ";}");
    } catch (e) {
      alert(e);
      throw e;
    }
    try {
      eval("let xprime = function (x,y)  {return " + xprimeString + ";}");
    } catch (e) {
      alert(e);
      throw e;
    }
  }
  render() {
    return (
      <div>
        <p>
          x'=
          <input
            id="xprime_id"
            type="text"
            name="xprime"
            value={this.state.xprime}
            onChange={this.handleUserInput}
          />
        </p>

        <br />

        <p>
          y'=
          <input
            id="yprime_id"
            type="text"
            name="yprime"
            value={this.state.yprime}
            onChange={this.handleUserInput}
          />
        </p>

        <div>
          The Display:
          <br />
          <table>
            <tbody>
              <tr>
                <td>Minimum x: </td>
                <td>
                  <input
                    id="xmin_id"
                    name="xmin"
                    size={5}
                    value={this.state.xmin}
                    onChange={this.handleUserInput}
                  />
                </td>
                <td>Minimum y: </td>
                <td>
                  <input
                    id="ymin_id"
                    name="ymin"
                    size={5}
                    value={this.state.ymin}
                    onChange={this.handleUserInput}
                  />
                </td>
                <td>Arrow length: </td>
                <td>
                  <input
                    id="arrow_id"
                    name="arrow"
                    value={this.state.arrow}
                    onChange={this.handleUserInput}
                    size={5}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="variableArrows"
                    name="variableArrows"
                    checked={this.state.isGoing}
                    onChange={this.handleUserInput}
                  />
                  Variable length arrows
                </td>
              </tr>
              <tr>
                <td>Maximum x: </td>
                <td>
                  <input
                    id="xmax_id"
                    name="xmax"
                    size={5}
                    value={this.state.xmax}
                    onChange={this.handleUserInput}
                  />
                </td>
                <td>Maximum y: </td>
                <td>
                  <input
                    id="ymax_id"
                    name="ymax"
                    size={5}
                    value={this.state.ymax}
                    onChange={this.handleUserInput}
                  />
                </td>
                <td>Number of arrows: </td>
                <td>
                  <input
                    id="arrownumber_id"
                    name="arrownumber"
                    size={5}
                    value={this.state.arrownumber}
                    onChange={this.handleUserInput}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.draw}>Graph Phase Plane</button>
        </div>
      </div>
    );
  }
}

export default PpControls;
