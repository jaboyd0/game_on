import React from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';




class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Basketball' };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value },() => {
      this.props.switchRoom(this.state.value)
      this.props.switchSport(this.state.value)
    });
  }

  // handleSubmit(event) {
  //   this.setState({ value: event.target.value },() => {
  //     this.props.switchRoom(this.state.value)
  //     // this.props.switchSport(this.state.value)
  //   });
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Basketball" >Basketball</option>
            <option value="Soccer">Soccer</option>
            <option value="Tennis">Tennis</option>
          </select>
        </label>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Arlington">Arlington</option>
            <option value="FairFax">Fairfax</option>
            <option value="Falls Church">Falls Church</option>
            <option value="Tysons">Tysons</option>

          </select>
        </label><input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Dropdown;
