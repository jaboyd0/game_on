import React from "react";
//import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';




class Dropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Basketball'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('You have selected: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Basketball">Basketball</option>
              <option value="Soccer">Soccer</option>
              <option value="Tennis">Tennis</option>
            </select><input type="submit" value="Submit" />
          </label>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Location">(Render location?)</option>
            </select>
          </label><input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default Dropdown;
