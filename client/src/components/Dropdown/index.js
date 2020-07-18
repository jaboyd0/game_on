import React from "react";
//import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Basketball" };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select
            value={this.state.value}
            onChange={this.props.handleDropDownChange}
          >
            <option value="Basketball">Basketball</option>
            <option value="Soccer">Soccer</option>
            <option value="Tennis">Tennis</option>
          </select>
        </label>
        <label>
          <select
            onChange={this.props.handleDropDownChange}
          >
            <option value="Arlington, VA">Arlington</option>
            <option value="FairFax, VA">Fairfax</option>
            <option value="Falls Church, VA">Falls Church</option>
            <option value="Tysons, VA">Tysons</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Dropdown;
