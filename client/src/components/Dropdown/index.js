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
            <option value="Arlington, VA+">Basketball - Arlington</option>
            <option value="FairFax, VA+">Basketball - Fairfax</option>
            <option value="Falls Church, VA+">Basketball - Falls Church</option>
            <option value="Tysons, VA+">Basketball - Tysons</option>
            <option value="Arlington, VA-">Soccer - Arlington</option>
            <option value="FairFax, VA-">Soccer - Fairfax</option>
            <option value="Falls Church, VA-">Soccer - Falls Church</option>
            <option value="Tysons, VA-">Soccer - Tysons</option>
            <option value="Arlington, VA_">Tennis - Arlington</option>
            <option value="FairFax, VA_">Tennis - Fairfax</option>
            <option value="Falls Church, VA_">Tennis - Falls Church</option>
            <option value="Tysons, VA_">Tennis - Tysons</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Dropdown;
