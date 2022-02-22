function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const nums = [7, 8, 9, 4, 5, 6, 1,, 2, 3, 0];
const operations = ["/", "*", "+", "-"];
const ids = {
  7: "seven",
  8: "eight",
  9: "nine",
  4: "four",
  5: "five",
  6: "six",
  1: "one",
  2: "two",
  3: "three",
  0: "zero",
  "/": "divide",
  "*": "multiply",
  "+": "add",
  "-": "subtract" };


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      lastPressed: undefined,
      calc: "0",
      operation: undefined });_defineProperty(this, "handleClick",

    e => {
      const { calc, lastPressed } = this.state;
      const { innerText } = e.target;

      switch (innerText) {
        case "AC":{
            this.setState({
              calc: "0" });

            break;
          }
        case "=":{
            const evaluated = eval(calc);
            this.setState({
              calc: evaluated });

            break;
          }
        case ".":{
            const splitted = calc.split(/[\+\*\-\/]/);
            const last = splitted.slice(-1)[0];

            if (!last.includes(".")) {
              this.setState({
                calc: calc + "." });

            }
            break;
          }
        default:{
            let e = undefined;
            //check for other operations.
            if (operations.includes(innerText)) {
              if (operations.includes(lastPressed) && innerText !== "-") {
                const lastNumberIdx = calc.
                split("").
                reverse().
                findIndex(char => nums.includes(+char));
                e = calc.slice(0, lastNumberIdx + 1) + `${innerText}`;
              } else {
                e = `${calc} ${innerText}`;
              }
            } else {
              e = calc === "0" ? innerText : calc + innerText;
            }

            this.setState({
              calc: e });

          }}

      this.setState({
        lastPressed: innerText });

    });}
  render() {
    const { calc } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: "calculator" }, /*#__PURE__*/
      React.createElement("p", { style: { position: "absolute", top: 0 } },
      JSON.stringify(this.state, null, 2)), /*#__PURE__*/

      React.createElement("div", { id: "display", className: "display" },
      calc), /*#__PURE__*/

      React.createElement("div", { className: "nums-container" }, /*#__PURE__*/
      React.createElement("button", {
        className: "big-h light-grey ac",
        onClick: this.handleClick,
        id: "clear" }, "AC"),



      nums.map((num) => /*#__PURE__*/
      React.createElement("button", {
        className: `dark-grey ${num === 0 && "big-h"} `,
        onClick: this.handleClick,
        key: num,
        id: ids[num] },

      num)), /*#__PURE__*/


      React.createElement("button", {
        className: "light-grey",
        onClick: this.handleClick,
        id: "decimal" }, ".")), /*#__PURE__*/




      React.createElement("div", { className: "operations-container" },
      operations.map((operation) => /*#__PURE__*/
      React.createElement("button", {
        className: "orange",
        key: operation,
        onClick: this.handleClick,
        id: ids[operation] },

      operation)), /*#__PURE__*/


      React.createElement("button", { className: "orange", onClick: this.handleClick, id: "equals" }, "="))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));