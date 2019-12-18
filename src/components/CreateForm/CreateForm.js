import React from "react";
import API from "../../API/api";
export default class MyForm extends React.Component {
  state = { name: "", type: "" };
  onNameChange = e => {
    let name = e.target.value;
    this.setState({ name });
  };
  onTypeChange = e => {
    let type = e.target.value;
    this.setState({ type });
  };
  onFormSubmit = async e => {
    e.preventDefault();
    const response = await API.post("/create", this.state);
    console.log(response.data);
  };
  render() {
    return (
      <form
        style={{ left: "30%", right: "30%", top: "5vh" }}
        className="position-absolute bg-info rounded p-3"
        onSubmit={this.onFormSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Animal Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.onNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Animal type</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.onTypeChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Create Animal
          </button>
        </div>
      </form>
    );
  }
}
