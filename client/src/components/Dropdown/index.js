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
          {/* <select
            value={this.state.value}
            onChange={this.props.handleDropDownChange}
          >
            <option value="Basketball">Basketball</option>
            <option value="Soccer">Soccer</option>
            <option value="Tennis">Tennis</option>
          </select> */}
        </label>
        <label>
          <select
            onChange={this.props.handleDropDownChange}
          >
            <option value="Basketball-Arlington, VA+">Basketball - Arlington</option>
            <option value="Basketball-FairFax, VA+">Basketball - Fairfax</option>
            <option value="Basketball-Falls Church, VA+">Basketball - Falls Church</option>
            <option value="Basketball-Tysons, VA+">Basketball - Tysons</option>
            <option value="Soccer-Arlington, VA-">Soccer - Arlington</option>
            <option value="Soccer-FairFax, VA-">Soccer - Fairfax</option>
            <option value="Soccer-Falls Church, VA-">Soccer - Falls Church</option>
            <option value="Soccer-Tysons, VA-">Soccer - Tysons</option>
            <option value="Tennis-Arlington, VA_">Tennis - Arlington</option>
            <option value="Tennis-FairFax, VA_">Tennis - Fairfax</option>
            <option value="Tennis-Falls Church, VA_">Tennis - Falls Church</option>
            <option value="Tennis-Tysons, VA_">Tennis - Tysons</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Dropdown;
